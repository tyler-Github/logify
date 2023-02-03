const log = (message, options = {}) => {
    const {
      font = 'normal',
      color = 'white'
    } = options;
  
    let fontCode;
    switch (font) {
      case 'bold':
        fontCode = '\x1b[1m';
        break;
      case 'italic':
        fontCode = '\x1b[3m';
        break;
      case 'underline':
        fontCode = '\x1b[4m';
        break;
      default:
        fontCode = '\x1b[0m';
    }
  
    let colorCode;
    switch (color) {
      case 'red':
        colorCode = '\x1b[31m';
        break;
      case 'green':
        colorCode = '\x1b[32m';
        break;
      case 'yellow':
        colorCode = '\x1b[33m';
        break;
      case 'blue':
        colorCode = '\x1b[34m';
        break;
      default:
        colorCode = '\x1b[37m';
    }
  
    console.log(`${fontCode}${colorCode}[LOGIFYS]: ${message}\x1b[0m`);
  };
  
  module.exports = log;
  