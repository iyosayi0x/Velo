# FOR CREATING RELEASE

import os
import shutil


rootbackend_folder= 'velo-backend'
rootfrontend_folder= 'velo-frontend'

files = ['manage.py', 'Procfile', 'requirements.txt', '.env']

folders = [ dir for dir in os.listdir(rootbackend_folder) if os.path.isdir(os.path.join(rootbackend_folder, dir)) ]

print('Deleting folders')
for folder in folders:
    try:
        shutil.rmtree(folder)
    except:
        pass

print('Copying folders')
for folder in folders:
    try:
        shutil.copytree(f'./{rootbackend_folder}/{folder}', folder)
    except:
        pass

print('Copying files')
for file in files:
    try:
        shutil.copyfile(f'./{rootbackend_folder}/{file}', file)
    except:
        pass


try:
    os.chdir('velo-frontend')
    print('Running build')
    os.system('npm run build')
    os.chdir('..')
except:
    pass

try:
    os.mkdir('./velo/dist')
except:
    pass


try:
    print('copying index.html')
    shutil.copyfile(f'./{rootfrontend_folder}/dist/index.html', './accounts/templates/index.html')
except:
    pass

try:
    print('copying static folder')
    shutil.copytree(f'./{rootfrontend_folder}/dist/static', './accounts/templates/static')
except:
    pass


with open ('.gitignore', 'a') as ignore:
    ignore.write('\n')
    ignore.write(f'/{rootbackend_folder}')
    ignore.write('\n')
    ignore.write(f'/{rootfrontend_folder}')
