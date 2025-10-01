

function PropsFun(userobj,userData) {
return(
<div>
<h1>Props in React</h1>
<h3>Name: {userobj.name}</h3>
<h3>Age: {userobj.age}</h3>
<h3>Email: {userobj.email}</h3>
<hr />
<h3>Name: {userData.name}</h3>
<h3>Age: {userData.age}</h3>
<h3>Email: {userData.email}</h3>
</div>
)
}

export default PropsFun