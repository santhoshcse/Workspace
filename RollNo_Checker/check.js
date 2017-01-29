window.addEventListener("load",doo);
function doo(){
	var btn = document.getElementById("btn");
	btn.addEventListener("click",check);
}
function check(){
	var rollno = document.getElementById("roll").value;
	var rreg = /^[0-2][0-9][aceflmnpt][1-35-7][0-6][0-9]$/i;
	document.getElementById("display").style.display = "block";
	if(rollno.match(rreg)){
		var rno = rollno.slice(4,6);
		if(!(Number(rno.charAt(0)) === 0  && Number(rno.charAt(1)) === 0)){
			var year = rollno.slice(0,2);
			var dept = rollno.charAt(2);
			var sec = rollno.charAt(3);
			var deptdet = {p:"CSE", f:"IT", m:"MECH", c:"CIVIL", a:"AUTO", e:"EEE", n:"EIE", t:"ETE", l:"ECE", P:"CSE", F:"IT", M:"MECH", C:"CIVIL", A:"AUTO", E:"EEE", N:"EIE", T:"ETE", L:"ECE"};
			var secdet = {1:"A", 2:"B", 3:"C", 5:"A", 6:"B", 7:"C"};
			var str = "Department : " + deptdet[dept];
			str = str + "\nRollNo : " + rno;
			str = str + "\nSection : " + secdet[sec];
			if(Number(sec) > 4){
				str = str + "\nYear (20" + Number(year) + " to 20" + (Number(year) + 3) + ")";
				str = str + "\nGraduation Year : 20" + (Number(year) + 3);
			}
			else{
				str = str + "\nYear (20" + year + " to 20" + (Number(year) + 4) + ")";
				str = str + "\nGraduation Year : 20" + (Number(year) + 4);
			}
			document.getElementById("display").innerText = str;
			//window.alert(str);
		}
		else{
			document.getElementById("display").innerText = "Invalid RollNo \nRollno should not end with 00";
		}
	}
	else{
		if(rollno.match(/^$/)){
			document.getElementById("display").innerText = "Empty RollNo";
		}
		else{
			document.getElementById("display").innerText = "Invalid RollNo \nRollno should be 8 character length\nEx: 15P201";
		}
	}
}