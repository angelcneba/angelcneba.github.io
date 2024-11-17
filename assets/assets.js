/*▄───────────────────────────────▄
  █                               █
  █  Выводит сообщение в консоль  █
  █                               █
  ▀───────────────────────────────▀*/
    Object.defineProperties(window,{__:{set:alert},_:{set(v) {
        let e = document.getElementById('console');
        e.innerHTML = [JSON.stringify(v), '<hr>', e.innerHTML].join('');
    }}});
    
/*▄──────────────────────▄
  █                      █
  █  Переопределяем "$"  █
  █                      █
  ▀──────────────────────▀*/
    Object.defineProperty(window, '$', {value: Object.create(null)});
    
/*────────────────────────────────────────────────────────────────────────────────────────────────*/

class Assets {
/*┌─────────────┐
  │ Конструктор │
  └─────────────┘*/
    constructor(...scripts) {
        scripts.forEach((file) => {
            let version = '0.0.0';
            if (window.location.hostname == 'localhost') {
                version = new Date().getTime();
            }
            let script = document.createElement('script');
            script.charset = 'utf-8';
            script.type = 'text/javascript';
            script.src = [file, version].join('?');
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    }
}

/*────────────────────────────────────────────────────────────────────────────────────────────────*/