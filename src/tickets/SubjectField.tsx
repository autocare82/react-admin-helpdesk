import { FieldProps, ReferenceOneField, TextField } from "react-admin";
import { Box } from "@mui/material";

export const SubjectField = (props: Omit<FieldProps, "source">) => (
  <Box
    className="column-content"
    overflow="hidden"
    textOverflow="ellipsis"
    whiteSpace="nowrap"
    maxWidth={{ xl: "700px", lg: "450px", md: "300px" }}
  >
    <TextField source="subject" fontWeight="bold" />
    &nbsp;-&nbsp;
    <ReferenceOneField
      label="Latest message"
      reference="messages"
      target="ticket_id"
      sort={{ field: "timestamp", order: "DESC" }}
    >
      <TextField source="message" />
    </ReferenceOneField>
  </Box>
);
