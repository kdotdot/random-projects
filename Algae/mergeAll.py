import sys

writefile = open('all.txt','w')

deleteNext = False
for i in range (1,len(sys.argv)):
    readfile = open(sys.argv[i],'r')
    for line in readfile.readlines():
        # writefile.write(line)
            if(line=='\n'):
                deleteNext=True
            else:
                if deleteNext:
                    writefile.write('\n')
                    writefile.write(line.split(' ', 1)[1])
                    deleteNext =False
                else:
                    writefile.write(line)
