<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {{? data.description }}
    <meta name="description" content="{{=data.description}}">
    {{?}}
    <title>{{=data.title}}</title>

    {{? data.cssFramework === 'bootstrap' }}
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    {{?? data.cssFramework === 'tailwind' }}
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    {{?}}

    <style>
        /* Custom CSS */
    </style>
</head>
<body {{? data.cssFramework === 'bootstrap' }}class="container mt-4"{{?? data.cssFramework === 'tailwind' }}class="container mx-auto p-4"{{?}}>
    <header>
        <h1>{{=data.title}}</h1>
    </header>

    <main>
        <p>Page content here.</p>
    </main>

    <footer>
        <p>&copy; {{=data.date.getFullYear()}} {{=data.author.fullName}}</p>
    </footer>

    {{? data.cssFramework === 'bootstrap' }}
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    {{?}}
    <script>
        // Custom JavaScript
    </script>
</body>
</html>
