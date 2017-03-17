# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-16.04"
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.provider "virtualbox" do |vb|
    vb.cpus = 2
    vb.memory = "4096"
  end
  config.vm.synced_folder ".", "/home/vagrant/italian-sentences"
  config.vm.provision "shell", inline: <<-SHELL
    su - vagrant /bin/bash -c 'curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash'
    su - vagrant /bin/bash -c 'export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm install 6.10.0 && nvm alias default 6.10.0'
  SHELL
end
