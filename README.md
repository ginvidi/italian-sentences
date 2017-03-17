# italian-sentences
## Italian sentences generator

#### Development VM
A VM can be used for development - a [Vagrantfile](Vagrantfile) at the root of this repo provides an Ubuntu Server VM which mounts this repo in the VM at `/home/vagrant/italian-sentences` and maps port `8080` to the host. The VM uses [NVM](https://github.com/creationix/nvm) to provide [NodeJS](https://nodejs.org/en/) & [npm](https://www.npmjs.com/)
To use the VM, you need to have [VirtualBox](https://www.virtualbox.org/wiki/Downloads) & [Vagrant](https://www.vagrantup.com/) installed.

To build and provision the VM run:

`vagrant up`

To log into the VM use:

`vagrant ssh`

#### ESLint
As good practice and to ensure consistency this project uses [ESLint](http://eslint.org/). ESLint is included as a dev dependency in the [package.json](package.json) and the ESLint configuration is in the [.eslintrc.json](.eslintrc) file. [Atom](https://atom.io/) has a [linter](https://atom.io/packages/linter) and [eslint plugin](https://atom.io/packages/linter-eslint) which can take advantage of this to give you linting on-the-fly.
