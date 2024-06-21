import { FieldProps, ReferenceOneField, WithRecord } from "react-admin";

export const FromField = (props: Omit<FieldProps, "source">) => (
  <ReferenceOneField
    label="From"
    reference="messages"
    target="ticket_id"
    sort={{ field: "timestamp", order: "DESC" }}
    queryOptions={{
      staleTime: 60 * 1000,
    }}
  >
    <WithRecord
      render={(record) =>
        record.author === "agent" ? <>Agent</> : <>Customer</>
      }
    />
  </ReferenceOneField>
);
