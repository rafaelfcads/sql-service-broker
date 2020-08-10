const receive = `WAITFOR (  
      RECEIVE TOP (@count)
        conversation_group_id,
        conversation_handle,                                                                                                                          
        message_sequence_number,
        CAST(message_body AS VARCHAR(MAX)) as message_body,
        message_type_id,
        message_type_name,
        priority,
        queuing_order,
        service_contract_id,
        service_contract_name,
        service_id,
        service_name,
        status,
        validation
      FROM [${queue}]  
    ), TIMEOUT @timeout`

const driverSettings = {
  requestTimeout: 0,
  camelCaseColumns: true,
  rowCollectionOnRequestCompletion: true
}

export { receive, driverSettings }