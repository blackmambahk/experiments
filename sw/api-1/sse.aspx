<%@ LANGUAGE="VBSCRIPT" %>
<%
        '// setup headers for the response in order to get the persistent HTTP connection
        Response.AddHeader("Content-Type", "text/event-stream")
        Response.AddHeader("Cache-Control", "no-cache")
        Response.AddHeader("Connection", "keep-alive")


        '// whenever you send two new line characters the message is sent automatically
        'ID: If the field value does not contain U+0000 NULL, then set the last event ID buffer to the field value. Otherwise, ignore the field.
        'Data: Append the field value to the data buffer, then append a single U+000A LINE FEED (LF) character to the data buffer.
        'Event: Set the event type buffer to the field value. This leads to event.type getting your custom event name.
        'Retry: If the field value consists of only ASCII digits, then interpret the field value as an integer in base ten, and set the event stream’s reconnection time to that integer. Otherwise, ignore the field.

        '// compose the message
        Response.Write("id: UniqueID1" & VbCrLf)
        Response.Write("event: add" & VbCrLf)
        Response.Write("data: " & "data-add" & VbCrLf)
        Response.Write(VbCrLf)


        Response.Write("id: UniqueID2" & VbCrLf)
        Response.Write("event: remove" & VbCrLf)
        Response.Write("data: {msg: 'data-remove', field1: 'data-remove', field2: 'data-remove'}" & VbCrLf)
        Response.Write(VbCrLf)


        Response.Write("id: UniqueID3" & VbCrLf)
        Response.Write("retry: 10000" & VbCrLf)
        Response.Write("data: " & "data" & VbCrLf)
        Response.Write(VbCrLf)
%>
