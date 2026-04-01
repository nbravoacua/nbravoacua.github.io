fetch('sidebar.html')
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);
  });

fetch('titles-degrees.json')
  .then(response => response.json())
  .then(data => {
    const titleColumn = document.getElementById('title-column');
    const degreeColumn = document.getElementById('degree-column');

    const titleList = document.createElement('ul');
    titleList.style.listStyleType = 'circle';
    data.titleColumn.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      titleList.appendChild(li);
    });
    titleColumn.appendChild(titleList);

    const degreeList = document.createElement('ul');
    degreeList.style.listStyleType = 'circle';
    data.degreeColumn.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      degreeList.appendChild(li);
    });
    degreeColumn.appendChild(degreeList);
  })

fetch('education.json')
  .then(response => response.json())
  .then(educationData => {
    const container = document.getElementById("education-container");

    const firstDivider = document.createElement("hr");
    firstDivider.setAttribute("style", "border-color:#100c08;");
    container.appendChild(firstDivider);

    educationData.forEach(item => {
      const block = document.createElement("div");
      block.setAttribute("style", "border-bottom:2px solid #100c08; padding-bottom:10px;");

      block.innerHTML = `
        <p style="font-weight:bold; margin-bottom:0;">${item.bold}</p>
        <p style="font-variant:small-caps; margin-top:0; margin-bottom:0.5em;">${item.smallcaps}</p>
        <div style="display:grid; grid-template-columns:60% 20% 20%; gap:10px;">
          <p style="margin:0;">${item.c1}</p>
          <p style="margin:0;">${item.c2}</p>
          <p style="margin:0;">${item.c3}</p>
        </div>
      `;

      container.appendChild(block);
    });
  })

fetch('outreach.json')
  .then(response => response.json())
  .then(outreachData => {
    const container = document.getElementById("outreach-container");

    const firstDivider = document.createElement("hr");
    firstDivider.setAttribute("style", "border-color:#100c08;");
    container.appendChild(firstDivider);

    outreachData.forEach(item => {
      const block = document.createElement("div");
      block.setAttribute("style", "border-bottom:2px solid #100c08; padding-bottom:10px;");

      block.innerHTML = `
        <p style="font-weight:bold; margin-bottom:0;">${item.bold}</p>
        <p style="font-variant:small-caps; margin-top:0; margin-bottom:0.5em;">${item.smallcaps}</p>
        <div style="display:grid; grid-template-columns:60% 20% 20%; gap:10px;">
          <p style="margin:0;">${item.c1}</p>
          <p style="margin:0;">${item.c2}</p>
          <p style="margin:0;">${item.c3}</p>
        </div>
      `;

      container.appendChild(block);
    });
  })

fetch('papers.json')
  .then(response => response.json())
  .then(papersData => {
    const container = document.getElementById("papers-container");

    const firstDivider = document.createElement("hr");
    firstDivider.setAttribute("style", "border-color:#100c08;");
    container.appendChild(firstDivider);

    papersData.forEach(item => {
      const block = document.createElement("div");
      block.setAttribute("style", "border-bottom:2px solid #100c08; padding-bottom:10px;");
      const url = item.c1;
      const displayLink = url.replace(/^https?:\/\//, "");

      block.innerHTML = `
        <p style="font-weight:bold; margin-bottom:0;">${item.bold}</p>
        <p style="font-variant:small-caps; margin-top:0; margin-bottom:0.5em;">${item.smallcaps}</p>
        <p style="font-style:italic; margin-top:0; margin-bottom:0.5em;">${item.italic}</p>
        <div style="display:grid; grid-template-columns:80% 20%; gap:20px;">
          <p style="margin:0;">🔗 <a href=${item.c1} rel="noopener noreferrer" target="_blank">${displayLink}</a></p>
          <p style="margin:0;">${item.c2}</p>
        </div>
      `;

      container.appendChild(block);
    });
  })

fetch('posters.json')
  .then(response => response.json())
  .then(postersData => {
    const container = document.getElementById("posters-container");

    const firstDivider = document.createElement("hr");
    firstDivider.setAttribute("style", "border-color:#100c08;");
    container.appendChild(firstDivider);

    postersData.forEach(item => {
      const block = document.createElement("div");
      block.setAttribute("style", "border-bottom:2px solid #100c08; padding-bottom:10px;");
      const url = item.c1;
      const displayLink = url.replace(/^https?:\/\//, "");

      block.innerHTML = `
        <p style="font-weight:bold; margin-bottom:0;">${item.bold}</p>
        <p style="font-variant:small-caps; margin-top:0; margin-bottom:0.5em;">${item.smallcaps}</p>
        <p style="font-style:italic; margin-top:0; margin-bottom:0.5em;">${item.italic}</p>
        <div style="display:grid; grid-template-columns:60% 20% 20%; gap:10px;">
          <p style="margin:0;">${item.c1}</p>
          <p style="margin:0;">${item.c2}</p>
          <p style="margin:0;">${item.c3}</p>
        </div>
      `;

      container.appendChild(block);
    });
  })

document.addEventListener('DOMContentLoaded', () => {
  const infoBody = document.querySelectorAll('.info-body');
  
  infoBody.forEach(info => {
    const clickTitle = info.querySelector('.click-title');
    const chevron = clickTitle.querySelector('.chevron');
    const clickAction = info.querySelector('.click-action');
    
    clickTitle.addEventListener('click', () => {
      const isHidden = clickAction.style.display === 'none' || clickAction.style.display === '';
      
      if (isHidden) {
        clickAction.style.display = 'block';
        chevron.style.transform = 'rotate(-90deg)';
      } else {
        clickAction.style.display = 'none';
        chevron.style.transform = 'rotate(0deg)';
      }
    });
  });
});
