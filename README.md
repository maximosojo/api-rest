API Rest NodeJs
===============

### Instalación

``` bash
git clone https://github.com/maximosojo/api-rest.git
```

### Librerias

- Express			^4.17.1
- Body Parser 		^1.19.0
- Nodemon			^2.0.4
- Sequelize			^6.3.4
- Mysql2			^2.1.0
- Automapper-js		^1.0.15
- Awilix			^4.2.6
- Bcrypt-nodejs		0.0.3

#### Nota: Esta configurado para trabajar con Mysql, puede ser adaptado a otras bases de datos soportadas por Sequelize o remover, instalar y configurar MongoDB

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

Sequelize

Generar modelo
``` bash
sequelize model:create --name user --attributes email:string,password:string,lastLogin:date
```

