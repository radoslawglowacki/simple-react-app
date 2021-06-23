import {useHistory} from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();


  function addMeetupData(meetupData) {
    fetch(
      "https://simple-react-app-10fef-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/")
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupData} />
    </section>
  );
}

export default NewMeetupPage;
