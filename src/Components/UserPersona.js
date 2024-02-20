import { Persona, PersonaSize, PersonaPresence } from "@fluentui/react";

const UserPersona = () => (
  <Persona
    imageUrl="url_for_image"
    text="John Doe"
    secondaryText="Employee"
    size={PersonaSize.size40}
    presence={PersonaPresence.online}
    padding={10}
  />
);

export default UserPersona;
