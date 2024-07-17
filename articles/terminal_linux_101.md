---
date: 16-07-2024
title: Introducción a la terminal de Linux
category: Tutoriales
---

![foto](/imagenes/butwearehackers.jpg)

# Un vistazo a la terminal de Linux

Los sistemas operativos ofrecen un intérprete de órdenes(terminal) que hace de interfaz entre el usuario y el kernel del sistema operativo, sin la necesidad de utilizar una interfaz gráfica. En las distribuciones Linux se ha estandarizado **BASH** (Bourne Again SHell), aunque también podemos usar su antecesor SH, o sus reinterpretaciones más modernas: ZSH, DASH, FISH, etcétera. Independientemente de esto tendremos disponibles una serie de programas o comandos básicos para operar llamados **'Coreutils'**. En este artículo veremos los esenciales.


**Importante**

El sistema de archivos de Linux comienza con el símbolo '/' (la raiz), seguido de varios directorios, separados por '/'. La ruta a tu directorio personal luce algo así: /home/TuUsuario

Un prompt en la terminal de bash luce así: user@sistema:pwd$. Donde pwd es el directorio donde te encuentras actualmente, que puede ser '~' si es tu directorio personal.
#
#
#
#
#

## ls - Lista el contenido de un directorio
 
 Uso: ls \[OPCIONES\] \[ARCHIVOS\]
 
 Si se omiten los archivos ls entonces listará el contenido del directorio actual. Algunas opciones utiles son -l, que muestra informacion detallada sobre los archivos, y -a que muestra los archivos y directorios ocultos.

 Ejemplos:

``` 
  user@debian:~$ ls
  Descargas  Desktop  Documentos Imágenes Música  Plantillas  Público  Vídeos

  user@debian:~$ ls Descargas
   nvim-linux64.deb  'Telegram Desktop'

  user@debian:~$ ls -l Descargas
  total 10216
  -rwxrwxrwx 1 user group 10454188 feb  3 10:59  nvim-linux64.deb
  drwxr-xr-x 2 user group     4096 jul 15 06:05 'Telegram Desktop'
```
#
#
#
#
#
## cd - Cambia el directorio de trabajo actual

Uso: cd \[DIRECTORIO\]

```
  user@debian:~/Desktop$ cd /etc/systemd
  user@debian:/etc/systemd$
```
#
#
#
#
#
## pwd - Imprime el nombre del directorio de trabajo actual

```
  user@debian:~/Desktop$ pwd
   /home/user/Desktop
```
#
#
#
#
#
## cat - Muestra el contenido de los archivos

Uso: cat \[ARCHIVOS\]

```
  user@debian:~/Documentos$ cat hello.go
   package main
   import "fmt"
   func main() {
    fmt.Println("Hello")
   }
```
#
#
#
#
#
## man - Manual de referencia

Uso: man \[COMANDO\]

#
#
#
#
#
## touch - Crea un archivo con el nombre indicado

Uso: touch \[ARCHIVO\]

#
#
#
#
#
## rm - Elimina archivos

La opción -r permite eliminar directorios y todos sus archivos dentro.

Uso: rm \[OPCIONES\] \[ARCHIVO\]

#
#
#
#
#
## mkdir - Crea un directorio/carpeta con el nombre indicado

Uso: mkdir \[NUEVODIR\]

#
#
#
#
#
## rmdir - Elimina directorios vacios

Uso: rmdir \[VIEJODIR\]


 

