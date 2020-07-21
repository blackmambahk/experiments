<%@ LANGUAGE="VBSCRIPT" %>
<html>
<head><title>Test SSE</title></head>
<body>
<%
Response.Write("Hello from ASP")
%>
<div id="xyz"></div>
<script>
    // subscribe for messages
    var source = new EventSource('api-1/sse.aspx');

    // handle generic messages
    source.addEventListener('message' , function(event) {
        // Do something with the data:
        document.getElementById('xyz').innerHTML+=event.data+'xxxxx';
    });
    // handle sse events
    source.addEventListener('open', function(e) {
      // Connection was opened.
    }, false);
    // handle sse events
    source.addEventListener('error', function(e) {
      if (e.readyState === EventSource.CLOSED) {
        // Connection was closed.
      }
    }, false);
    // handle custom events
    source.addEventListener("add", function(event) {
        // do stuff with data
        console.log(event.data);
    });
    // handle custom events
    source.addEventListener("remove", function(event) {
        // do stuff with data
        console.log(event.data);
    });
</script>

</body>
</html>
