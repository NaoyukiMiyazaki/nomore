const components = {
  alert: [
    {
      id: 1,
      title: 'bootstrap alert',
      css: `.alert-primary {
        color: #004085;
        background-color: #cce5ff;
        border-color: #b8daff;
      }
      .alert {
        position: relative;
        padding: .75rem 1.25rem;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: .25rem;
      }`,
      html:
        '<div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>',
    },
    {
      id: 2,
      title: 'alert2',
      css: `
      .alert {
        position: relative;
        padding: .75rem 1.25rem;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: .25rem;
      }
      .alert-danger {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
      }`,
      html:
        '<div class="alert alert-danger" role="alert">A simple secondary alert—check it out!</div>',
    },
  ],
  button: [
    {
      id: 3,
      title: 'button1',
      css: `.btn {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      }
      .btn-primary {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
      }`,
      html: `<button type="button" class="btn btn-primary">Primary</button>`,
    },
    {
      id: 4,
      title: 'button2',
      css: `.btn {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      }
      .btn-danger {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
      }`,
      html: `<button type="button" class="btn btn-danger">Danger</button>`,
    },
  ],
  card: [
    {
      id: 5,
      title: 'card1',
      css: `.card {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
      }
      .card-img-top {
        width: 100%;
        border-top-left-radius: calc(.25rem - 1px);
        border-top-right-radius: calc(.25rem - 1px);
      }
      .card-body {
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding: 1.25rem;
      }
      p {
        margin-top: 0;
        margin-bottom: 1rem;
      }
      .card-text:last-child {
        margin-bottom: 0;
      }`,
      html: `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="//placehold.it/300x200" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>`,
    },
  ],
}

export default components
