import hashlib
import os

BUFF_SIZE = 1024*1024*10


def get_sha1(file):
    if not os.path.isfile(file):
        return
    sha1 = hashlib.sha1()
    with open(file, 'rb') as f:
        while True:
            data = f.read(BUFF_SIZE)
            sha1.update(data)
            if not data:
                return str(sha1.hexdigest()).lower()



if __name__ == '__main__':
    print(get_sha1('1.mp4')) # dbc85234c284b95b592fc600112b0837c9ce3d7b
