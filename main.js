function main() {
    //Access the canvas through DOM: Document Object Model
    var canvas = document.getElementById('myCanvas');   // The paper
    var gl = canvas.getContext('webgl');                // The brush and the paints

    // Define vertices data
    /**
     * A ( -0.5, -0.5 )
     * B (  0.5, -0.5 )
     * C (  0.5,  0.5 )
     * D ( -0.5,  0.5 )
     */

    var vertices = [
        //top-rear (kiri)
        //ABC
        -0.367, -0.156, 1.0, 1.0, 1.0, //A
        0.278, -0.156, 1.0, 1.0, 1.0, //B
        -0.378, -0.044, 1.0, 1.0, 1.0, //C
        //ECF
        -0.356, 0.122, 0.75, 0.75, 0.75, //E
        -0.378, -0.044, 0.9, 0.9, 0.9, //C
        -0.267, -0.044, 0.9, 0.9, 0.9, //F
        //CBD
        0.278, -0.156, 1.0, 1.0, 1.0, //B
        -0.378, -0.044, 1.0, 1.0, 1.0, //C
        0.289, -0.044, 1.0, 1.0, 1.0, //D
        //EFG
        -0.356, 0.122, 0.75, 0.75, 0.75, //E
        -0.267, -0.044, 0.9, 0.9, 0.9, //F
        -0.267, 0.122, 0.75, 0.75, 0.75, //G
        //KJI
        0.178, 0.122, 0.75, 0.75, 0.75, //K
        0.178, -0.044, 0.9, 0.9, 0.9, //J
        0.267, 0.122, 0.75, 0.75, 0.75, //I
        //JDI
        0.178, -0.044, 0.9, 0.9, 0.9, //J
        0.267, 0.122, 0.75, 0.75, 0.75, //I
        0.289, -0.044, 0.9, 0.9, 0.9, //D
        //MJF
        -0.278, 0.078, 1.0, 1.0, 1.0, //M
        0.178, -0.044, 1.0, 1.0, 1.0, //J
        -0.267, -0.044, 1.0, 1.0, 1.0, //F
        //MJN
        -0.278, 0.078, 1.0, 1.0, 1.0, //M
        0.178, -0.044, 1.0, 1.0, 1.0, //J
       0.189, 0.078, 1.0, 1.0, 1.0, //N
        //HNM
        -0.267, 0.156, 0.9, 0.9, 0.9, //H
       0.189, 0.078, 0.9, 0.9, 0.9, //N
        -0.278, 0.078, 0.9, 0.9, 0.9, //M
        //HNL
        -0.267, 0.156, 0.9, 0.9, 0.9, //H
       0.189, 0.078, 0.9, 0.9, 0.9, //N
        0.178, 0.156, 0.9, 0.9, 0.9, //L

        //top-front(kanan)
        //ABC
        -0.322, -0.156, 0.9, 0.9, 0.9, //A
        0.322, -0.156, 0.9, 0.9, 0.9, //B
        -0.333, -0.089, 0.9, 0.9, 0.9, //C
        //ECF
        -0.311, 0.122, 0.825, 0.825, 0.825, //E
        -0.333, -0.089, 0.825, 0.825, 0.825, //C
        -0.222, -0.089, 0.825, 0.825, 0.825, //F
        //CBD
        0.322, -0.156, 0.9, 0.9, 0.9, //B
        -0.333, -0.089, 0.9, 0.9, 0.9, //C
        0.333, -0.089, 0.9, 0.9, 0.9, //D
        //EFG
        -0.311, 0.122, 0.825, 0.825, 0.825, //E
        -0.222, -0.089, 0.825, 0.825, 0.825, //F
        -0.222, 0.122, 0.825, 0.825, 0.825,//G
        //KJI
        0.222, 0.122, 0.825, 0.825, 0.825, //K
        0.222, -0.089, 0.825, 0.825, 0.825, //J
        0.311, 0.122, 0.825, 0.825, 0.825, //I
        //JDI
        0.222, -0.089, 0.825, 0.825, 0.825, //J
        0.311, 0.122, 0.825, 0.825, 0.825, //I
        0.333, -0.089, 0.825, 0.825, 0.825, //D
        //MJF
        -0.228, 0.111, 1.0, 1.0, 1.0, //M
        0.222, -0.089, 1.0, 1.0, 1.0, //J
        -0.222, -0.089, 1.0, 1.0, 1.0, //F
        //MJN
        -0.228, 0.111, 1.0, 1.0, 1.0, //M
        0.222, -0.089, 1.0, 1.0, 1.0, //J
        0.228, 0.111, 1.0, 1.0, 1.0, //N
        //HNM
        -0.222, 0.156, 0.75, 0.75, 0.75, //H
        0.228, 0.111, 0.75, 0.75, 0.75, //N
        -0.228, 0.111, 0.75, 0.75, 0.75, //M
        //HNL
        -0.222, 0.156, 0.75, 0.75, 0.75, //H
        0.228, 0.111, 0.75, 0.75, 0.75, //N
        0.222, 0.156, 0.75, 0.75, 0.75, //L
    ];

    // Create a linked-list for storing the vertices data
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform vec2 uChange;
        void main() {
            
            gl_Position = vec4(aPosition + uChange, 0.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);    // Yellow
        }
    `;

    // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    // Compile .c into .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // Prepare a .exe shell (shader program)
    var shaderProgram = gl.createProgram();

    // Put the two .o files into the shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    // Link the two .o files, so together they can be a runnable program/context.
    gl.linkProgram(shaderProgram);

    // Start using the context (analogy: start using the paints and the brushes)
    gl.useProgram(shaderProgram);

    // Teach the computer how to collect
    //  the positional values from ARRAY_BUFFER
    //  to each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition, 
        2, 
        gl.FLOAT, 
        false, 
        5 * Float32Array.BYTES_PER_ELEMENT, 
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor, 
        3, 
        gl.FLOAT, 
        false, 
        5 * Float32Array.BYTES_PER_ELEMENT, 
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    // Apply some interaction using mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick, false);

    var speed = [0, 0.0086];
    // Create a uniform to animate the vertices
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");
    var change = [0.5, 0];
    var changeKiri = [-0.5, 0];

    function render() {
        if (!freeze) {
            gl.clearColor(0.1, 0.1, 0.1, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            if (change[1] <= -0.85 || change[1] >= 0.85) speed[1] = -speed[1];
            change[1] = change[1] + speed[1];

            gl.uniform2fv(uChange, changeKiri);
            gl.drawArrays(gl.TRIANGLES, 0, vertices.length/10);

            gl.uniform2fv(uChange, change);
            gl.drawArrays(gl.TRIANGLES, vertices.length/10, vertices.length/10);
        }
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}