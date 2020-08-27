import openpyxl as xl
import xlsxwriter

import csv

class Bacteria:
    def __init__(self, id, completeId,gid,clo,size, name, removed):
        self.id = id
        self.completeId = completeId
        self.gid = gid
        self.clo = clo
        self.size = size
        self.name = name
        self.removed = removed

# init Bacteria

readfile = open('all.txt','r')
typeOfLine=0
bactCol = []
id = None
completeId = None
gid = None
clo = None
size = None
name = None
removed = False
for line in readfile.readlines():
    if line == '\n':
        typeOfLine = 0
        if id != None and completeId != None and gid != None and clo != None and size != None and name != None:
            bactCol.append(Bacteria(id,completeId,gid,clo,size,name,removed))
            id = None
            completeId = None
            gid = None
            clo = None
            size = None
            name = None
            removed = False
    else:
        if typeOfLine == 0:
            # Linea 1
            name = line.split(',')[0].rstrip()
            typeOfLine +=1
        elif typeOfLine == 1:
            # Linea 2
            size = line.split()[0].replace(',', '')
            clo = line.split()[2]
            typeOfLine +=1
        elif typeOfLine == 2 and line.split(' ')[0] == 'Record':
            # Linea Error
            removed = True
        elif typeOfLine == 2 and line.split()[1].split(':')[0] == 'GI':
            # Linea 3
            completeId = line.split()[0]
            id = line.split()[0].split('.')[0]
            gid = line.split()[1].split(':')[1].rstrip()

# modify excel

workbook = xl.load_workbook(filename='bac.xlsx',read_only=True)
sheet = workbook.active



workbook2 = xlsxwriter.Workbook('out.xlsx')
workbook2.use_zip64()
worksheet = workbook2.add_worksheet()

index = 0
for row in sheet.rows:
    # EXCEL HEADER
    if index == 0:
        for cell in row:
            if type(cell) != xl.cell.read_only.EmptyCell:
                worksheet.write(cell.coordinate, cell.value)
        index+=1
    else:
        id = row[7].value
        for bact in bactCol:
            if bact.id == id:
                if not bact.removed:
                    for cell in row:
                        if type(cell) != xl.cell.read_only.EmptyCell:
                            worksheet.write(cell.coordinate, cell.value)
                    worksheet.write('A'+str(index+1), bact.name)
                    worksheet.write('B'+str(index+1), 1) if bact.name == row[9].value else worksheet.write('B'+str(index+1), 0)
                    worksheet.write('C'+str(index+1), bact.size)
                    worksheet.write('D'+str(index+1), bact.clo)
                    worksheet.write('E'+str(index+1), bact.gid)
                    worksheet.write('F'+str(index+1), bact.completeId)
                    index+=1
                break

workbook2.close()
