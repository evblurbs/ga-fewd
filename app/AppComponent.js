var React = require('react');
module.exports = React.createClass({
  render: function () {
    return (
      <h1>FEWD App!!</h1>
    );
  }
});

curl -X GET \
  -H "X-Parse-Application-Id: AaX7jjvYNO0hc0DAjy7EHOj3jDvovR4z7TVPHOyq" \
  -H "X-Parse-REST-API-Key: U48iJwZuCQj46B697tH4EyTiAKWiCDp22Q4AbHDI" \
  -H "X-Parse-Revocable-Session: 1" \
  -G \
  --data-urlencode 'username=evblurbs' \
  --data-urlencode 'password=wtfparse?' \
  https://api.parse.com/1/login
