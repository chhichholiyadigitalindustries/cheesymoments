/**
 * CHEESY MOMENTS KAITHAL - QR CODE GENERATION ENGINE
 * Standalone offline QR Generator with Logo Integration & PNG/SVG Downloads
 */

const CheesyQR = {
  // Default URL resolver (current origin + /menu.html or configurable production URL)
  getDefaultMenuUrl() {
    if (typeof window !== 'undefined' && window.location) {
      const origin = window.location.origin;
      const path = window.location.pathname.replace(/\/[^/]*$/, '/menu.html');
      return origin + path;
    }
    return "https://cheesymoments.vercel.app/menu.html";
  },

  /**
   * Render QR code on a Canvas element with optional center logo
   * @param {HTMLCanvasElement} canvas 
   * @param {string} url 
   * @param {number} size 
   * @param {boolean} includeLogo 
   */
  async renderToCanvas(canvas, url, size = 320, includeLogo = true) {
    if (!window.QRCode) {
      console.error('QRCode library is not loaded');
      return;
    }

    return new Promise((resolve, reject) => {
      window.QRCode.toCanvas(
        canvas,
        url,
        {
          width: size,
          margin: 2,
          errorCorrectionLevel: 'H', // High error correction (30%) allows center logo
          color: {
            dark: '#17120D',
            light: '#FFFFFF'
          }
        },
        async (error) => {
          if (error) {
            reject(error);
            return;
          }

          if (includeLogo) {
            try {
              const ctx = canvas.getContext('2d');
              const logoSize = Math.floor(size * 0.22);
              const logoX = (canvas.width - logoSize) / 2;
              const logoY = (canvas.height - logoSize) / 2;

              // Draw white circular backing shield
              ctx.save();
              ctx.beginPath();
              ctx.arc(canvas.width / 2, canvas.height / 2, (logoSize / 2) + 6, 0, Math.PI * 2);
              ctx.fillStyle = '#FFFFFF';
              ctx.fill();
              ctx.lineWidth = 3;
              ctx.strokeStyle = '#FFC400';
              ctx.stroke();

              // Draw logo badge circle
              ctx.beginPath();
              ctx.arc(canvas.width / 2, canvas.height / 2, logoSize / 2, 0, Math.PI * 2);
              ctx.fillStyle = '#FFC400';
              ctx.fill();
              ctx.clip();

              // Draw logo image
              const img = new Image();
              img.crossOrigin = 'anonymous';
              img.src = 'assets/images/logo.png';
              await new Promise(r => {
                img.onload = r;
                img.onerror = r;
              });

              if (img.complete && img.naturalWidth !== 0) {
                ctx.drawImage(img, logoX, logoY, logoSize, logoSize);
              } else {
                // Fallback text if logo fails to load
                ctx.fillStyle = '#17120D';
                ctx.font = 'bold 10px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('CHEESY', canvas.width / 2, (canvas.height / 2) - 2);
                ctx.fillText('MOMENTS', canvas.width / 2, (canvas.height / 2) + 10);
              }
              ctx.restore();
            } catch (e) {
              console.warn('Center logo overlay failed, keeping raw QR', e);
            }
          }

          resolve(canvas);
        }
      );
    });
  },

  /**
   * Generate SVG string for vector download
   */
  async getSvgString(url) {
    if (!window.QRCode) return '';
    return new Promise((resolve, reject) => {
      window.QRCode.toString(
        url,
        {
          type: 'svg',
          margin: 2,
          errorCorrectionLevel: 'H',
          color: {
            dark: '#17120D',
            light: '#FFFFFF'
          }
        },
        (err, string) => {
          if (err) reject(err);
          else resolve(string);
        }
      );
    });
  },

  /**
   * Download Canvas as PNG file
   */
  downloadPng(canvas, filename = 'cheesy-moments-menu-qr.png') {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  /**
   * Download SVG file
   */
  async downloadSvg(url, filename = 'cheesy-moments-menu-qr.svg') {
    const svgString = await this.getSvgString(url);
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = filename;
    link.href = blobUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  }
};

if (typeof window !== 'undefined') {
  window.CheesyQR = CheesyQR;
}
