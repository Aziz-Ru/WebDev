const fs = require("fs");
const path = require("path");

const data = {};

//base directory of the data folder
data.basedir = path.join(__dirname, "/.data");

// write data to file

data.create = (dir, file, content, callback) => {
  //open file;
  fs.open(
    data.basedir + "/" + dir + "/" + file + ".json",
    "wx",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        const stringData = JSON.stringify(content);
        fs.writeFile(fileDescriptor, stringData, (err1) => {
          if (!err1) {
            fs.close(fileDescriptor, (err2) => {
              if (!err2) {
                callback(false);
              } else {
                callback("Error closing file");
              }
            });
          } else {
            callback("Errro in Writing");
          }
        });
      } else {
        callback("File Already Exists");
      }
    }
  );
};

//read data from file

data.read = (dir, file, callback) => {
  fs.readFile(
    data.basedir + "/" + dir + "/" + file + ".json",
    "utf-8",
    (err, data) => {
      callback(err, data);
    }
  );
};

data.update = (dir, file, content, callback) => {
  //file open for writeing

  fs.open( data.basedir+ "/" + dir + "/" + file + ".json",
    "r+",
    (err, descriptor) => {
      if (!err) {
        const stringData = JSON.stringify(content);
        fs.ftruncate(descriptor, (err1) => {
          if (!err1) {
            fs.writeFile(descriptor, stringData, (err2) => {
              if (!err2) {
                //close the file
                fs.close(descriptor, (err3) => {
                  if (!err3) {
                    callback(false);
                  } else {
                    callback("Error in closing file");
                  }
                });
              } else {
                callback("Error in writing in File");
              }
            });
          } else {
            console.log("Error in truncating file");
          }
        });
      } else {
        console.log(err);
      }
    }
  );
};

data.delete=(dir,file,callback)=>{
    fs.unlink(data.basedir+'/'+dir+'/'+file+'.json',(err)=>{
        if(!err){
            callback(false)
        }
        else {
            callback('Error in deleting file');
        }
    })

}
module.exports = data;
