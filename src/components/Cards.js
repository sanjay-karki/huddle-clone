import { StyledCard } from "./styles/Cards.styled";
 

export default function Cards(props) {

    return (
        <StyledCard layout={props.id % 2 === 0 && "row-reverse" }>
                <div>
                    <h3>{props.title}</h3>

                    <p>
                        {props.body}
                    </p>
                </div>
                <div>
                    <img src={"./images/" + props.image} alt="" />
                </div>
        </StyledCard>
    )
}
