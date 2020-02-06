console.log('Hello Pikaface');

import jsonUsers from "./data/users.json";
import $ from "jquery";
import User from "./pikaface/User";
import Message from "./pikaface/Message";
import Wall from "./pikaface/Wall";
import Page from "./pikaface/Page";

let page: Page = new Page(Page.DEFAULT_HEADER, Page.DEFAULT_YIELD);
let wall: Wall = new Wall();
let user: User = new User();

$(() => { loadPage() });

function loadPage() {
    $('header').load(`src/templates/${page.header}.html`, function() {
        if($('#submit')) {
            $('#submit').click(function (){
                let email: string = `${$("#email").val()}`;
                let password: string = `${$("#password").val()}`;
            
                user.login(email, password, jsonUsers);
                page.update(user);

                loadPage();
            })
        }
    });
    
    $('#yield').load(`src/templates/${page.yield}.html`, function() {
        if($('#submit-message')) {
            $('#submit-message').on('click', () => {
                let content: string = `${$("textarea").val()}`;
                let message: Message = new Message(content);

                if (content != 'undefined') {
                    wall.add(message);
                    user.updateMood(wall, User.MAXIMUM_NOTIFICATIONS);
                }

                loadPage();
            })  
        }

        if($('#wall-wrapper')) {
            wall.messages.forEach(message => {
                let p = document.createElement('p');
                p.classList.add('message');

                p.addEventListener('click', () => {
                    message.turnToReaded()
                    user.updateMood(wall, User.MAXIMUM_NOTIFICATIONS);
                    loadPage();
                });

                p.innerText = message.content;

                $('#wall-wrapper').append(p);
            });
        }

        if($('#logged')) {
            let notifs = wall.notifications();

            if (notifs >= 1) {
                $('#logged').html(`<img src='../dist/images/${user.mood}-pika.jpg' /><p class='notif notif-${user.mood}'>${wall.notifications()}</p>`);
            } else {
                $('#logged').html(`<img src='../dist/images/${user.mood}-pika.jpg' />`);
            }
        }
    }); 
}

