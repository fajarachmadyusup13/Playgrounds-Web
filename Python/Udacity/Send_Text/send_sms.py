from twilio.rest import Client

# Your Account SID from twilio.com/console
account_sid = "AC1244ba661639ee54ae13243caa45c11f"
# Your Auth Token from twilio.com/console
auth_token  = "8dc6f03e084e4547c691d0708ca807b3"

client = Client(account_sid, auth_token)

message = client.messages.create(
    to="+6281295771331", 
    from_="+17744257652",
    body="Hello from Python!")

print(message.sid)