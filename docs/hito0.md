# ***19-10-22***
# Descarga de git para usarlo desde línea de órdenes
En mi caso, tenía instalado git, Git Bash y GitHub Desktop. En caso contrario, simplemente debería haber ejecutado:
  - sudo apt-get install git

# Creación de par de claves y subida de clave pública a GitHub
1. He abierto git bash.
2. He comprobado si había ya alguna clave creada con el comando: ls -al ~/.ssh
3. Para crear la clave pública he usado: ssh-keygen -t ed25519 -C "lauraroson99@gmail.com"
4. A continuación, me pidió que introdujese un fichero para guardar la clave. Directamente pulsé la tecla intro,
  por lo que me lo guardó en el fichero por defecto en /Users/laura/.ssh/id_rsa.
5. Posteriormente, me pide una contraseña (passphrase) para acceder a la clave.
6. Se generan dos ficheros
  - id_rsa (donde se almacena la clave privada).
  - id_rsa.pub (donde se almacena la clave pública).
7. Agregué la clave al agente gestor de claves. Para ello:
  - Inicié el agente con: eval "$(ssh-agent -s)"
  - Inserté la clave con: ssh-add -K ~/.ssh/id_rsa
8. Finalmente, incluí la clave pública en GitHub.
  - Fui a Github/settings
  - Fui al apartado SSH and GPG keys
  - Pulsé sobre Add SSH Key
  - Subí el fichero id_rsa.pub

# Configuración correcta del nombre y correo electrónico para que aparezca en los commits.
En mi caso, ya tenía configurado el nombre y el correo. Para comprobarlo he abierto git bash y he introducido:
  - git config --global user.email
  - git config --global user.name

# Edición del perfil de GitHub para que aparezca una imagen en vez del avatar por omisión, nombre completo y ciudad, así como universidad.
Para hacer esto, he ido a GitHub/settings/profile y he pulsado sobre el icono del lápiz dentro del icono del avatar y he elegido una foto que tenía en mi portátil.

# Incrementar la seguridad de nuestra cuenta en GitHub activando el segundo factor de autenticación.
Para hacer esto, he ido a GitHub/settings/security y dentro del apartado Two-factor authentication, le he dado a activar. Siguiendo los pasos y utilizando Microsoft Authenticator, he activado el segundo factor de autenticación.


# ***26-10-22***
