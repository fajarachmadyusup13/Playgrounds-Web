import os
from string import digits

def rename_file():
    file_list = os.listdir("./prank")
    print(file_list)
    os.chdir("./prank")
    for file_name in file_list:
        remove_digits = file_name.maketrans('', '', digits)
        new_name = file_name.translate(remove_digits)
        print("Old name: " + file_name)
        print("New name: " + new_name)
        os.rename(file_name, new_name)

rename_file()

