//  ------------Structure-----------
 
 class StudentOfCSE{
      constructor(name,roll,dept,grp,shift){
         this.name=name,
         this.roll=roll,
         this.dept=dept,
         this.grp=grp,
         this.shift=shift

      }

// ---------Instance Method-----------
   getStudentDetails(){
    return{
        name:this.name,
        roll:this.roll,
        dept:this.dept,
        grp:this.grp,
        shift:this.shift
     }
   }
 }

 let nasifa=new StudentOfCSE("Nasifa Talukder",588749,"Computer","A1","1st");
 let sourov=new StudentOfCSE("Sourov Dey",588708,"Computer","A1","1st");

 console.log(nasifa.getStudentDetails());
 console.log(sourov.getStudentDetails());