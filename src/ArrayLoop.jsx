function ArrayLoop() {
    const colleges = [
        {
            id: 1,
            name: "Harvard University",
            city: "Cambridge",
            rank: 1,
            country: "USA",
            students: [
                {
                    id: 101,
                    name: "John Smith",
                    gpa: 3.8,
                    major: "Computer Science"
                },
                {
                    id: 102,
                    name: "Emma Davis",
                    gpa: 3.9,
                    major: "Business"
                }
            ]
        },
        {
            id: 2,
            name: "Oxford University",
            city: "Oxford",
            rank: 2,
            country: "UK",
            students: [
                {
                    id: 201,
                    name: "James Wilson",
                    gpa: 3.7,
                    major: "Physics"
                },
                {
                    id: 202,
                    name: "Sophie Brown",
                    gpa: 3.8,
                    major: "Literature"
                }
            ]
        },
        {
            id: 3,
            name: "MIT",
            city: "Cambridge",
            rank: 3,
            country: "USA",
            students: [
                {
                    id: 301,
                    name: "Alex Johnson",
                    gpa: 4.0,
                    major: "Engineering"
                },
                {
                    id: 302,
                    name: "Emily Chen",
                    gpa: 3.9,
                    major: "Mathematics"
                }
            ]
        }
    ];


    return (
        <div>
            <h2>Top Universities and Their Students</h2>
            {colleges.map((college) => (
                <div key={college.id} style={{ marginBottom: "20px" }}>
                    <h3>{college.name}</h3>
                    <ul style={{
                        padding: '20px',
                        background: '#ccc',
                        borderBottom: '2px solid #000',
                        margin: '20px',
                        borderRadius: '10px'
                    }}>
                        <li>
                            <strong>College ID:</strong> {college.id}
                        </li>
                        <li>
                            <strong>Name:</strong> {college.name}
                        </li>
                        <li>
                            <strong>City:</strong> {college.city}
                        </li>
                        <li>
                            <strong>Rank:</strong> {college.rank}
                        </li>
                        <li>
                            <strong>Country:</strong> {college.country}
                        </li>
                    </ul>

                    <h4>Students:</h4>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {college.students.map((student) => (
                            <li key={student.id} style={{ marginBottom: "10px" }}>
                                <ul style={{
                                    padding: '20px',
                                    background: '#ccc',
                                    borderBottom: '2px solid #000',
                                    margin: '20px',
                                    borderRadius: '10px'
                                }}>
                                    <li>
                                        <strong>Student ID:</strong> {student.id}
                                    </li>
                                    <li>
                                        <strong>Name:</strong> {student.name}
                                    </li>
                                    <li>
                                        <strong>GPA:</strong> {student.gpa}
                                    </li>
                                    <li>
                                        <strong>Major:</strong> {student.major}
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default ArrayLoop;