// logIn
// post Ruba
userName:String;
password: String;
// get Boolean
ok: Boolean;

//register

// post charity from Ruba
name:String;
phon:String;
password:String;
email:String
location:String;
publicationNumber:String;
publicationDate:Date;
establishmentDate:Date;
bankNumber:String;

//get charity
_id:ObjectID;
ok:Boolean;

//post donner Ruba
name:String;
phon:String;
password:String
email:String;
Permanence:Boolean;

//get donner
_id:ObjectID;
ok:Boolean;

//post member Ruba
userName:String;
password:String;
phon:String;
firstName:String;
lastName:String;
age:Number;
nationalNumber:String;
healthyStatus:String;
work:{
    work_type:String;
    work_salary:String;
};
father:{
    name:String,
    work:{
        work_type:String;
        work_salary:String;
    },
    healthy_status:String,
};
husbands:[{
    name:String,
    work:{
        work_type:String;
        work_salary:String;
    },
    healthy_status:String,
}]
mother:{
    name:String,
    work:{
        work_type:String;
        work_salary:String;
    },
    healthy_status:String,
};
overages:[{
    name:String,
    age:Number;
    work:{
        work_type:String;
        work_salary:String;
    },
    healthy_status:String,
}];
// if he/she didnt have Child dont send any things
chidren:[{
    name:String,
    age:Number;
    work:{
        work_type:String;
        work_salary:String;
    },
    healthy_status:String,
}];
ownership:Boolean;
ventilated:Boolean;
sunny:Boolean;

// get member register
ok:Boolean;
_id:ObjectID;

