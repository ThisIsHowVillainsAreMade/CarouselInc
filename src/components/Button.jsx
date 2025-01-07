import "./Button.scss"

export default function Button() {

    const onClickMailtoHandler = () => {
        const email = "wosinskiok@gmail.com";
        const subject = encodeURIComponent("Inscription");
        const body = encodeURIComponent(
          "Bonjour, je voudrais participer à vos jeux.\nMerci !"
        );
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
      
  
    return (
      <div className="buttonContainer">
        <button className="button type1" onClick={onClickMailtoHandler}>
        </button>
      </div>
    );
  }
  