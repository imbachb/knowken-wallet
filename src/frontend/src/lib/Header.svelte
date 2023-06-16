<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style="z-index: 5">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="knowken-logo.png" alt="LOGO" width="30" height="30" class="d-inline-block" />
      Knowken<sup>&#174;</sup>
      <span class="text-light ms-3">-</span>
      <span class="navbar-brand wallet-font ms-3">Wallet</span>
    </a>

    <button
      style="border: none"
      class="navbar-toggler m-0 p-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Left -->
      <div class="me-auto">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/admin">Admin</a>
          </li>
        </ul>
      </div>
      <!-- Right -->
      <div class="ms-auto">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/"><i class="bi bi-house me-1" />Dashboard</a>
          </li>
          <li class="nav-item">
            <!-- TODO: Only text-danger if not empty -->
            <a class="nav-link text-danger" href="/alerts"
              ><i class="bi bi-chat me-1" />Incoming Tokens <!-- TODO: Add nr of incoming tokens --></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/account"><i class="bi bi-person me-1" />Account / ID</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/logout"><i class="bi bi-door-open me-1" />Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
