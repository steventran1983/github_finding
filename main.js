$(document).ready(function () {
    $('#finder').on('keyup', function (content) {
        let usrname = content.target.value;
        console.log(usrname);

        $.ajax({
            type: 'GET',
            url: 'https://api.github.com/users/' + usrname,
            data: {
                client_id: '461abb986b7768acc211',
                client_secret: '0c907fa3027e541c40d04f823faecfb3a3d92008'
            },
            success: (userinfo) => {
                $('#userinfo').html(`
                    <div class="card bg-light mb-3">
                        <div class="card-header bg-primary">
                            <h4 class="panel-title">${userinfo.name}</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-4">
                                    <img class="img-thumbnail avatar" src="${userinfo.avatar_url}">
                                    <a target="_blank" class="btn btn-primary btn-block" href="${userinfo.html_url}">User Profile</a>
                                </div>
                                <div class="col-8">
                                    <input type="button" class="btn btn-primary repo" value="Public repo: ${userinfo.public_repos}">
                                    <input type="button" class="btn btn-success repo" value="Public gists: ${userinfo.public_gists} ">
                                    <input type="button" class="btn btn-danger repo" value="Follower: ${userinfo.followers}">
                                    <input type="button" class="btn btn-warning repo" value="Following: ${userinfo.following} ">
                                    <br><br>
                                    <ul class="list-group">
                                        <li id="info" class="list-group-item text-black bg-warning">User's Information</li>
                                        <li class="list-group-item text-black">Company: ${userinfo.company}</li>
                                        <li class="list-group-item text-black">Email: ${userinfo.email}</li>
                                        <li class="list-group-item text-black">Webpage: ${userinfo.blog}</li>
                                        <li class="list-group-item text-black">Location: ${userinfo.location}</li>
                                        <li class="list-group-item text-black">Bio: ${userinfo.bio}</li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </div>`);
            }
        });
    });
});