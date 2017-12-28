function consoleType(type) {
  const clog = console[type];
  let clogType = console.log;

  if (clog) {
    clogType = clog;
  }

  return clogType;
}

function makeConsole(moduleName, msg, config, style, styleMsg, type) {
  const log = consoleType(type);

  if (config === '') {
    log(
      `%c${moduleName}`,
      style,
    );
    console.log(msg);
    console.log('');
  } else {
    log(
      `%c${moduleName}%c ${msg}`,
      style,
      styleMsg,
    );
  }
}


export default class {
  constructor(moduleName = '') {
    this.moduleName = moduleName !== '' ? `[${moduleName}]` : '';
    this.moduleNameStyles = 'color: #565656; font-weight: bold; font-size: 13.5px;';
  }

  log(msg, config) {
    makeConsole(this.moduleName, msg, config, this.moduleNameStyles, 'color: #333;');
  }

  info(msg, config) {
    makeConsole(this.moduleName,
      msg,
      config,
      `${this.moduleNameStyles} color: #0066ff; background-color: #daeafb;`,
      'color: #0066ff;',
    );
  }

  safe(msg, config) {
    makeConsole(this.moduleName,
      msg,
      config,
      `${this.moduleNameStyles} color: #39a045; background-color: #dafbe4;`,
      'color: #39a045;',
    );
  }

  warn(msg, config) {
    makeConsole(this.moduleName,
      msg,
      config,
      `${this.moduleNameStyles} color: #d28e13;`,
      'color: #d28e13;',
      'warn',
    );
  }

  error(msg, config) {
    makeConsole(this.moduleName,
      msg,
      config,
      `${this.moduleNameStyles} color: red;`,
      'color: red;',
      'error',
    );
  }
}
