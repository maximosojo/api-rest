API Rest NodeJs
===============

### Instalación

``` bash
git clone https://github.com/maximosojo/api-rest.git
```

### Librerias

- Express		^4.17.1
- Body Parser 	^1.19.0
- Nodemon		^2.0.4

### Licencia

Este paquete está bajo la licencia MIT. Ver la licencia completa. [LICENSE](LICENSE)

### Fix

Nodemon
Error
``` bash
[nodemon] Internal watch failed: ENOSPC: System limit for number of file watchers reached, watch
```

Solution
``` bash
echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```