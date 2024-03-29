import { removePost } from "../api/posts/index.mjs";

/**
 * 
Creates a new HTML element for a post with the given post data.
 * @param {Object} postData - An object containing data for the post.
 * @param {Object} postData.author - An object containing data for the post author.
 * @param {string} postData.author.avatar - The URL of the author's avatar image.
 * @param {string} postData.author.name - The name of the author.
 * @param {string} postData.created - The date the post was created.
 * @param {string} postData.title - The title of the post.
 * @param {string} postData.body - The body text of the post.
 * @param {string} postData.media - The URL of any media associated with the post.
 * @param {Object} postData._count - An object containing counts of comments and reactions for the post.
 * @param {number} postData._count.comments - The number of comments on the post.
 * @param {number} postData._count.reactions - The number of reactions on the post.
 * @param {string} postData.id - The ID of the post.
 * @returns {HTMLElement} - The HTML element for the post.
 */

export function postTemplate(postData) {
    const posts = document.createElement("div");
    posts.innerHTML += `
  <section class="container d-flex align-items-center justify-content-center mb-5" style="margin-top: 70px; width:auto">
    <div class="card" >
      <div class="card-body">
        <!-- Data -->
        <div>
          <div class="d-flex mb-3">
            <a href="">
              <img src="${postData.author.avatar}" class="border rounded-circle me-2"
                alt="N/A" style="height: 60px; width: 60px" />
            </a>
            <div>
              <a href="" class="text-dark mb-0">
                <a href="../profile/?name=${postData.author.name}">${postData.author.name}</a>
                <p class="me-3"style="font-size: 0.68em;">${postData.created}</p>
              </a>
              <a href="" class="text-muted d-block">
              </a>
            </div>
          </div>
        </div>
        <!-- Description -->
        <div>
          <h3 class="text-dark mb-0" style="color: #ffff" >${postData.title}</h3>
          <p class="text-dark mb-0" style="color: #ffff" >${postData.body}</p>
        </div>
      </div>
      <!-- Media -->
      <div class="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
        <img src="${postData.media}" alt="" class="w-100"  style="margin-bottom: 5px" />
        <div class="mx-4 mt-3 mb-3">
            <ul class="list-unstyled d-flex justify-content-between mb-0 pe-xl-5">
                <li><span class="small ps-2 text-dark">${postData._count.comments} Comments</span></li>
                <li><span class="small ps-2 text-dark">${postData._count.reactions}Likes</span></li>
              </ul>
          </div>
          
      </div>
      <div>
          <button class="btn float-end me-1 delete-button small ps-2 text-dark" data-id="${postData.id}">Delete</button>
          <a href="../post/edit/?id=${postData.id}" class="btn float-end me-1 small ps-2 text-dark">Edit</a>
          <a href="/post.html?id=${postData.id}" class="btn float-end me-1 small ps-2 text-dark">View post</a>
          </div>
    </div>
  </div>
</section>`;

const deleteButton = posts.querySelector(".delete-button");

  deleteButton.addEventListener("click", () => {
    removePost(postData.id);

    setTimeout(() => {
      location.reload();
    }, 200);
  });

    return posts;
}






/**
 * Export template function for rendering all posts as HTML using .map.
 * @param {Array} postDataList Function parameter indicates a list of posts.
 * @param {object} parent Function parameter.
 */

export function renderPostTemplates(postDataList, parent) {
    parent.innerHTML = ''; 
    parent.append(...postDataList.map(postTemplate))
}



export function renderPostTemplate(postData, parent){
    parent.innerHTML = '';
    parent.append(postTemplate(postData))
}



