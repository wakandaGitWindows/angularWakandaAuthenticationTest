
function raz(){
	
	ds.User.remove()
	

	wait(10);

	ds.User.remove()
}

function buildData()
{
	raz();


	
	var users = 
	[
	{
		ID:1,
		login: 'elmetni' ,
		password: 123456,
		accessLevel: 1,
		fullName: 'ELMETNI Hamza'
		
		
	},
	
	{
		ID:2,
		login: 'imane' ,
		password: 123456,
		accessLevel: 2,
		fullName: 'imane hadri'
		
		
	},
	
	
	{
		ID:3,
		login: 'amine' ,
		password: 123456,
		accessLevel: 3,
		fullName: 'amine bakali'
		
		
	},
	
	
	];
		
	
	
	for (var i = 0,nb = users.length; i < nb; i++)
	{
		var p = users[i];
		var u = new ds.User(
		{
			
			
			
			ID:p.ID,
			login: p.login ,
			password: p.password,
			accessLevel: p.accessLevel,
			fullName: p.fullName
		
		
		
		});
		
		u.save();	
	}
	
}

buildData();

"all done";