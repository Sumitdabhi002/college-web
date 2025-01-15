// Function to show the requested section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => section.style.display = 'none'); // Hide all sections
    document.getElementById(sectionId).style.display = 'block'; // Show target section
  }
  
  // Function to simulate saving the profile (e.g., to a server or local storage)
  function saveProfile() {
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const rollNo = document.getElementById('roll-no').value;
    const profileImage = document.getElementById('profile-image').files[0];
  
    // Simulate saving profile (e.g., by saving to local storage or sending to server)
    alert(`Profile saved for ${name}\nCourse: ${course}\nRoll No: ${rollNo}`);
    
    // Optionally, update the displayed profile image (if uploaded)
    if (profileImage) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('profile-pic').src = e.target.result;
      };
      reader.readAsDataURL(profileImage);
    }
  }
  
  // Simulate downloading the Result PDF for a subject
  function downloadResult(subject) {
    window.location.href = `${subject}_result.pdf`; // Replace with actual PDF file paths
  }
  
  // Simulate downloading the Assignment PDF for a subject
  function downloadAssignment(subject) {
    window.location.href = `${subject}_assignment.pdf`; // Replace with actual PDF file paths
  }
  
  // Simulate downloading the Study Material PDF for a subject
  function downloadStudyMaterial(subject) {
    window.location.href = `${subject}_study_material.pdf`; // Replace with actual PDF file paths
  }
  
  // Simulate downloading the Timetable PDF
  function downloadTimetable() {
    window.location.href = 'timetable.pdf'; // Replace with the actual path to the timetable PDF
  }
  
  // Show the first section (Attendance) by default
  document.addEventListener('DOMContentLoaded', () => {
    showSection('attendance');
  });
  