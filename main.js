function main() {
	//Access the canvas through DOM: Document Object Model
	var canvas = document.getElementById("myCanvas");   // The paper
	var gl = canvas.getContext("webgl");                // The brush and the paints

	// Define vertices data consisting of position and color properties
    var cube = [
        0.1,  0.6,  -0.1,  1,  0,  0,  255,  255,  255,  10,  
        0.1,  0.4,  0.1,  1,  0,  0,  255,  255,  255,  10,  
        0.1,  0.4,  -0.1,  1,  0,  0,  255,  255,  255,  10,  
        0.1,  0.6,  0.1,  0,  0,  1,  255,  255,  255,  10,  
        -0.1,  0.4,  0.1,  0,  0,  1,  255,  255,  255,  10,  
        0.1,  0.4,  0.1,  0,  0,  1,  255,  255,  255,  10,  
        -0.1,  0.6,  0.1,  -1,  0,  0,  255,  255,  255,  10,  
        -0.1,  0.4,  -0.1,  -1,  0,  0,  255,  255,  255,  10,  
        -0.1,  0.4,  0.1,  -1,  0,  0,  255,  255,  255,  10,  
        -0.1,  0.6,  -0.1,  0,  0,  -1,  255,  255,  255,  10,  
        0.1,  0.4,  -0.1,  0,  0,  -1,  255,  255,  255,  10,  
        -0.1,  0.4,  -0.1,  0,  0,  -1,  255,  255,  255,  10,  
        -0.1,  0.4,  0.1,  0,  -1,  0,  255,  255,  255,  10,  
        0.1,  0.4,  -0.1,  0,  -1,  0,  255,  255,  255,  10,  
        0.1,  0.4,  0.1,  0,  -1,  0,  255,  255,  255,  10,  
        0.1,  0.6,  0.1,  0,  1,  0,  255,  255,  255,  10,  
        -0.1,  0.6,  -0.1,  0,  1,  0,  255,  255,  255,  10,  
        -0.1,  0.6,  0.1,  0,  1,  0,  255,  255,  255,  10,  
        0.1,  0.6,  0.1,  1,  0,  0,  255,  255,  255,  10,  
        -0.1,  0.6,  0.1,  0,  0,  1,  255,  255,  255,  10,  
        -0.1,  0.6,  -0.1,  -1,  0,  0,  255,  255,  255,  10,  
        0.1,  0.6,  -0.1,  0,  0,  -1,  255,  255,  255,  10,  
        -0.1,  0.4,  -0.1,  0,  -1,  0,  255,  255,  255,  10,  
        0.1,  0.6,  -0.1,  0,  1,  0,  255,  255,  255,  10,   
    ];

    var vertices = [];

	var vertic = [
        //eraser left
		-0.573257333333333, 0.166666666666667, 0.125610666666667, 0, 0, 1, 227, 227, 227, 10, 
		-1.42630683333333, -0.166666666666667, 0.125610666666667, 0, 0, 1, 255, 255, 255, 10, 
		-0.573257333333333, -0.166666666666667, 0.125610666666667, 0, 0, 1, 255, 255, 255, 10, 
		-1.42630683333333, -0.166666666666667, 0.125610666666667, -1, 0, 0, 255, 255, 255, 10, 
		-1.42630683333333, 0.166666666666667, 0.00930566666666667, -1, 0, 0, 255, 255, 255, 10, 
		-1.42630683333333, -0.166666666666667, 0.00930566666666667, -1, 0, 0, 255, 255, 255, 10, 
		-1.42630683333333, 0.166666666666667, 0.125610666666667, 0, 1, 0, 197, 197, 197, 10, 
		-0.573257333333333, 0.166666666666667, 0.00930566666666667, 0, 1, 0, 255, 255, 255, 10, 
		-1.42630683333333, 0.166666666666667, 0.00930566666666667, 0, 1, 0, 255, 255, 255, 10, 
		-0.573257333333333, -0.166666666666667, 0.00930566666666667, 0, 0, -1, 255, 255, 255, 10, 
		-1.42630683333333, 0.166666666666667, 0.00930566666666667, 0, 0, -1, 255, 255, 255, 10, 
		-0.573257333333333, 0.166666666666667, 0.00930566666666667, 0, 0, -1, 255, 255, 255, 10, 
		-0.573257333333333, -0.166666666666667, 0.125610666666667, 0, -1, 0, 255, 255, 255, 10, 
		-1.42630683333333, -0.166666666666667, 0.00930566666666667, 0, -1, 0, 255, 255, 255, 10, 
		-0.573257333333333, -0.166666666666667, 0.00930566666666667, 0, -1, 0, 255, 255, 255, 10, 
		-0.573257333333333, 0.166666666666667, 0.125610666666667, 1, 0, 0, 227, 227, 227, 10, 
		-0.573257333333333, -0.166666666666667, 0.00930566666666667, 1, 0, 0, 255, 255, 255, 10, 
		-0.573257333333333, 0.166666666666667, 0.00930566666666667, 1, 0, 0, 255, 255, 255, 10, 
		-0.682209166666667, 0.166666666666667, 0.253874, 0, 0, 1, 255, 255, 255, 10, 
		-1.32567116666667, 0.0834003333333333, 0.253874, 0, 0, 1, 191, 191, 191, 10, 
		-0.682209166666667, 0.0834005, 0.253874, 0, 0, 1, 255, 255, 255, 10, 
		-1.32567116666667, 0.0834003333333333, 0.253874, -1, 0, 0, 191, 191, 191, 10, 
		-1.32567116666667, 0.166666666666667, 0.1253585, -1, 0, 0, 238, 238, 238, 10, 
		-1.32567116666667, -0.166666666666667, 0.1253585, -1, 0, 0, 208, 208, 208, 10, 
		-1.32567116666667, 0.166666666666667, 0.253874, 0, 1, 0, 216, 216, 216, 10, 
		-0.682209166666667, 0.166666666666667, 0.1253585, 0, 1, 0, 241, 241, 241, 10, 
		-1.32567116666667, 0.166666666666667, 0.1253585, 0, 1, 0, 238, 238, 238, 10, 
		-0.682209166666667, -0.166666666666667, 0.1253585, 0, 0, -1, 255, 255, 255, 10, 
		-1.32567116666667, 0.166666666666667, 0.1253585, 0, 0, -1, 238, 238, 238, 10, 
		-0.682209166666667, 0.166666666666667, 0.1253585, 0, 0, -1, 241, 241, 241, 10, 
		-0.682209166666667, 0.0834005, 0.253874, 0, -0.457094, 0.889419, 255, 255, 255, 10, 
		-1.32567116666667, -0.166666666666667, 0.1253585, 0, -0.457094, 0.889419, 208, 208, 208, 10, 
		-0.682209166666667, -0.166666666666667, 0.1253585, 0, -0.457094, 0.889419, 255, 255, 255, 10, 
		-0.682209166666667, 0.166666666666667, 0.1253585, 1, 0, 0, 241, 241, 241, 10, 
		-0.682209166666667, 0.0834005, 0.253874, 1, 0, 0, 255, 255, 255, 10, 
		-0.682209166666667, -0.166666666666667, 0.1253585, 1, 0, 0, 255, 255, 255, 10, 
		-1.42630683333333, 0.166666666666667, 0.125610666666667, 0, 0, 1, 197, 197, 197, 10, 
		-1.42630683333333, 0.166666666666667, 0.125610666666667, -1, 0, 0, 197, 197, 197, 10, 
		-0.573257333333333, 0.166666666666667, 0.125610666666667, 0, 1, 0, 227, 227, 227, 10, 
		-1.42630683333333, -0.166666666666667, 0.00930566666666667, 0, 0, -1, 255, 255, 255, 10, 
		-1.42630683333333, -0.166666666666667, 0.125610666666667, 0, -1, 0, 255, 255, 255, 10, 
		-0.573257333333333, -0.166666666666667, 0.125610666666667, 1, 0, 0, 255, 255, 255, 10, 
		-1.32567116666667, 0.166666666666667, 0.253874, 0, 0, 1, 216, 216, 216, 10, 
		-1.32567116666667, 0.166666666666667, 0.253874, -1, 0, 0, 216, 216, 216, 10, 
		-0.682209166666667, 0.166666666666667, 0.253874, 0, 1, 0, 255, 255, 255, 10, 
		-1.32567116666667, -0.166666666666667, 0.1253585, 0, 0, -1, 208, 208, 208, 10, 
		-1.32567116666667, 0.0834003333333333, 0.253874, 0, -0.457094, 0.889419, 191, 191, 191, 10, 
		-0.682209166666667, 0.166666666666667, 0.253874, 1, 0, 0, 255, 255, 255, 10, 
		
		
		 
		
        //eraser right
    
		1.42674266666667, 0.0106271666666667, 0.2623965, 0, -0.984808, -0.173648, 38, 38, 38, 255, 
		0.573693166666667, 0.0685098333333333, -0.0658728333333333, 0, -0.984808, -0.173648, 10, 10, 10, 255, 
		1.42674266666667, 0.0685098333333333, -0.0658726666666667, 0, -0.984808, -0.173648, 80, 80, 80, 255, 
		0.573693166666667, 0.0685098333333333, -0.0658728333333333, -1, 0, 0, 10, 10, 10, 255, 
		0.573693166666667, 0.125165166666667, 0.282592666666667, -1, 0, 0, 48, 48, 48, 255, 
		0.573693166666667, 0.183047833333333, -0.0456766666666667, -1, 0, 0, 0, 0, 0, 255, 
		0.573693166666667, 0.0106271666666667, 0.2623965, 0, -0.173648, 0.984808, 75, 75, 75, 255, 
		1.42674266666667, 0.125165166666667, 0.282592666666667, 0, -0.173648, 0.984808, 16, 16, 16, 255, 
		0.573693166666667, 0.125165166666667, 0.282592666666667, 0, -0.173648, 0.984808, 48, 48, 48, 255, 
		1.42674266666667, 0.183047833333333, -0.0456765, 0, 0.984808, 0.173648, 63, 63, 63, 255, 
		0.573693166666667, 0.125165166666667, 0.282592666666667, 0, 0.984808, 0.173648, 48, 48, 48, 255, 
		1.42674266666667, 0.125165166666667, 0.282592666666667, 0, 0.984808, 0.173648, 16, 16, 16, 255, 
		1.42674266666667, 0.0685098333333333, -0.0658726666666667, 0, 0.173648, -0.984808, 80, 80, 80, 255, 
		0.573693166666667, 0.183047833333333, -0.0456766666666667, 0, 0.173648, -0.984808, 0, 0, 0, 255, 
		1.42674266666667, 0.183047833333333, -0.0456765, 0, 0.173648, -0.984808, 63, 63, 63, 255, 
		1.42674266666667, 0.0106271666666667, 0.2623965, 1, 0, 0, 38, 38, 38, 255, 
		1.42674266666667, 0.183047833333333, -0.0456765, 1, 0, 0, 63, 63, 63, 255, 
		1.42674266666667, 0.125165166666667, 0.282592666666667, 1, 0, 0, 16, 16, 16, 255, 
		1.31779083333333, -0.115687666666667, 0.240123833333333, 0, -0.984808, -0.173648, 67, 67, 67, 255, 
		0.674328833333333, -0.101228666666667, 0.1581225, 0, -0.984808, -0.173648, 38, 38, 38, 255, 
		1.31779083333333, -0.101228666666667, 0.158122666666667, 0, -0.984808, -0.173648, 58, 58, 58, 255, 
		0.674328833333333, -0.101228666666667, 0.1581225, -1, 0, 0, 38, 38, 38, 255, 
		0.674328833333333, 0.0108753333333333, 0.262440333333333, -1, 0, 0, 4, 4, 4, 255, 
		0.674328833333333, 0.068758, -0.065829, -1, 0, 0, 0, 0, 0, 255, 
		0.674328833333333, -0.115687666666667, 0.240123833333333, 0, -0.173648, 0.984808, 27, 27, 27, 255, 
		1.31779083333333, 0.0108753333333333, 0.262440333333333, 0, -0.173648, 0.984808, 26, 26, 26, 255, 
		0.674328833333333, 0.0108753333333333, 0.262440333333333, 0, -0.173648, 0.984808, 4, 4, 4, 255, 
		1.31779083333333, 0.068758, -0.065829, 0, 0.984808, 0.173648, 49, 49, 49, 255, 
		0.674328833333333, 0.0108753333333333, 0.262440333333333, 0, 0.984808, 0.173648, 4, 4, 4, 255, 
		1.31779083333333, 0.0108753333333333, 0.262440333333333, 0, 0.984808, 0.173648, 26, 26, 26, 255, 
		1.31779083333333, -0.101228666666667, 0.158122666666667, 0, -0.796533, -0.604595, 58, 58, 58, 255, 
		0.674328833333333, 0.068758, -0.065829, 0, -0.796533, -0.604595, 0, 0, 0, 255, 
		1.31779083333333, 0.068758, -0.065829, 0, -0.796533, -0.604595, 49, 49, 49, 255, 
		1.31779083333333, 0.0108753333333333, 0.262440333333333, 1, 0, 0, 26, 26, 26, 255, 
		1.31779083333333, -0.101228666666667, 0.158122666666667, 1, 0, 0, 58, 58, 58, 255, 
		1.31779083333333, 0.068758, -0.065829, 1, 0, 0, 49, 49, 49, 255, 
		0.573693166666667, 0.0106271666666667, 0.2623965, 0, -0.984808, -0.173648, 75, 75, 75, 255, 
		0.573693166666667, 0.0106271666666667, 0.2623965, -1, 0, 0, 75, 75, 75, 255, 
		1.42674266666667, 0.0106271666666667, 0.2623965, 0, -0.173648, 0.984808, 38, 38, 38, 255, 
		0.573693166666667, 0.183047833333333, -0.0456766666666667, 0, 0.984808, 0.173648, 0, 0, 0, 255, 
		0.573693166666667, 0.0685098333333333, -0.0658728333333333, 0, 0.173648, -0.984808, 10, 10, 10, 255, 
		1.42674266666667, 0.0685098333333333, -0.0658726666666667, 1, 0, 0, 80, 80, 80, 255, 
		0.674328833333333, -0.115687666666667, 0.240123833333333, 0, -0.984808, -0.173648, 27, 27, 27, 255, 
		0.674328833333333, -0.115687666666667, 0.240123833333333, -1, 0, 0, 27, 27, 27, 255, 
		1.31779083333333, -0.115687666666667, 0.240123833333333, 0, -0.173648, 0.984808, 67, 67, 67, 255, 
		0.674328833333333, 0.068758, -0.065829, 0, 0.984808, 0.173648, 0, 0, 0, 255, 
		0.674328833333333, -0.101228666666667, 0.1581225, 0, -0.796533, -0.604595, 38, 38, 38, 255, 
		1.31779083333333, -0.115687666666667, 0.240123833333333, 1, 0, 0, 67, 67, 67, 255, 
		
        
    ];

	var indices = [
        //eraser left
		0, 1, 2, 
		3, 4, 5, 
		6, 7, 8, 
		9, 10, 11, 
		12, 13, 14, 
		15, 16, 17, 
		18, 19, 20, 
		21, 22, 23, 
		24, 25, 26, 
		27, 28, 29, 
		30, 31, 32, 
		33, 34, 35, 
		0, 36, 1, 
		3, 37, 4, 
		6, 38, 7, 
		9, 39, 10, 
		12, 40, 13, 
		15, 41, 16, 
		18, 42, 19, 
		21, 43, 22, 
		24, 44, 25, 
		27, 45, 28, 
		30, 46, 31, 
		33, 47, 34, 
		
         
        
        //eraser right
		48, 49, 50, 
		51, 52, 53, 
		54, 55, 56, 
		57, 58, 59, 
		60, 61, 62, 
		63, 64, 65, 
		66, 67, 68, 
		69, 70, 71, 
		72, 73, 74, 
		75, 76, 77, 
		78, 79, 80, 
		81, 82, 83, 
		48, 84, 49, 
		51, 85, 52, 
		54, 86, 55, 
		57, 87, 58, 
		60, 88, 61, 
		63, 89, 64, 
		66, 90, 67, 
		69, 91, 70, 
		72, 92, 73, 
		75, 93, 76, 
		78, 94, 79, 
		81, 95, 82, 
		
        
        //cube
		96, 97, 98, 
		99, 100, 101, 
		102, 103, 104, 
		105, 106, 107, 
		108, 109, 110, 
		111, 112, 113, 
		96, 114, 97, 
		99, 115, 100, 
		102, 116, 103, 
		105, 117, 106, 
		108, 118, 109, 
		111, 119, 112, 
		
         
        
    ];

	// Create a linked-list for storing the vertices data
	var vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

	// Create a linked-list for storing the indices data
	var indexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	gl.bufferData(
		gl.ELEMENT_ARRAY_BUFFER,
		new Uint16Array(indices),
		gl.STATIC_DRAW
	);

	var vertexShaderSource = `
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute vec3 aNormal;
        attribute float aShininessConstant;
        varying vec3 vColor;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying float vShininessConstant;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        void main() {
            gl_Position = uProjection * uView * uModel * (vec4(aPosition * 2. / 3., 1.25));
            vColor = aColor;
            vNormal = aNormal;
            vPosition = (uModel * (vec4(aPosition * 2. / 3., 1.25))).xyz;
            vShininessConstant = aShininessConstant;
        }
    `;

	var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying float vShininessConstant;
        uniform vec3 uLightConstant;        // It represents the light color
        uniform float uAmbientIntensity;    // It represents the light intensity
        // uniform vec3 uLightDirection;
        uniform vec3 uLightPosition;
        uniform mat3 uNormalModel;
        uniform vec3 uViewerPosition;
        void main() {
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightDirection = uLightPosition - vPosition;
            vec3 normalizedLight = normalize(lightDirection);  // [2., 0., 0.] becomes a unit vector [1., 0., 0.]
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0., 0., 0.);
            if (cosTheta > 0.) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            vec3 reflector = reflect(-lightDirection, normalizedNormal);
            vec3 normalizedReflector = normalize(reflector);
            vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
            float cosPhi = dot(normalizedReflector, normalizedViewer);
            vec3 specular = vec3(0., 0., 0.);
            if (cosPhi > 0.) {
                float specularIntensity = pow(cosPhi, vShininessConstant); 
                specular = uLightConstant * specularIntensity;
            }
            vec3 phong = ambient + diffuse + specular;
            gl_FragColor = vec4(phong * vColor, 1.);
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
	let compiled = gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS);
	if (!compiled) {
		console.error(gl.getShaderInfoLog(vertexShader));
	}

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
		3,
		gl.FLOAT,
		false,
		10 * Float32Array.BYTES_PER_ELEMENT,
		0
	);
	gl.enableVertexAttribArray(aPosition);
	var aColor = gl.getAttribLocation(shaderProgram, "aColor");
	gl.vertexAttribPointer(
		aColor,
		3,
		gl.FLOAT,
		false,
		10 * Float32Array.BYTES_PER_ELEMENT,
		6 * Float32Array.BYTES_PER_ELEMENT
	);
	gl.enableVertexAttribArray(aColor);
	var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
	gl.vertexAttribPointer(
		aNormal,
		3,
		gl.FLOAT,
		false,
		10 * Float32Array.BYTES_PER_ELEMENT,
		3 * Float32Array.BYTES_PER_ELEMENT
	);
	gl.enableVertexAttribArray(aNormal);

	var aShininessConstant = gl.getAttribLocation(
		shaderProgram,
		"aShininessConstant"
	);
	gl.vertexAttribPointer(
		aShininessConstant,
		1,
		gl.FLOAT,
		false,
		10 * Float32Array.BYTES_PER_ELEMENT,
		9 * Float32Array.BYTES_PER_ELEMENT
	);
	gl.enableVertexAttribArray(aShininessConstant);

	// Connect the uniform transformation matrices
	var uModel = gl.getUniformLocation(shaderProgram, "uModel");
	var uView = gl.getUniformLocation(shaderProgram, "uView");
	var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");

	// Set the projection matrix in the vertex shader
	var projection = glMatrix.mat4.create();
	glMatrix.mat4.perspective(
		projection,
		Math.PI / 3, // field of view
		1, // ratio
		0.5, // near clip
		10 // far clip
	);
	gl.uniformMatrix4fv(uProjection, false, projection);

	// Set the view matrix in the vertex shader
	var view = glMatrix.mat4.create();
	var camera = [0, 0, 3];
	var camNow = [0, 0, 0];
	glMatrix.mat4.lookAt(
		view,
		camera, // camera position
		camNow, // the point where camera looks at
		[0, 1, 0] // up vector of the camera
	);
	gl.uniformMatrix4fv(uView, false, view);

	// Define the lighting and shading
	var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
	var uAmbientIntensity = gl.getUniformLocation(
		shaderProgram,
		"uAmbientIntensity"
	);
	gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]); // white light
	gl.uniform1f(uAmbientIntensity, 0.286); // light intensity
	// var uLightDirection = gl.getUniformLocation(shaderProgram, "uLightDirection");
	// gl.uniform3fv(uLightDirection, [2.0, 0.0, 0.0]);    // light comes from the right side
	var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
	var lightPosition = [0.0, 0.5, 0.0];
	gl.uniform3fv(uLightPosition, lightPosition);
	var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
	var uViewerPosition = gl.getUniformLocation(
		shaderProgram,
		"uViewerPosition"
	);
	gl.uniform3fv(uViewerPosition, camera);

	function onKeyPressed(event) {
		if (event.keyCode == 87) {
			for (let i = 0; i < cube.length; i += 10) {
				cube[i + 1] += 0.04;
				lightPosition[1] += 0.04 * 1 / 20;
				console.log("Test");
			}
		} else if (event.keyCode == 83) {
			for (let i = 0; i < cube.length; i += 10) {
				cube[i + 1] -= 0.04;
				lightPosition[1] -= 0.04 * 1 / 20;
			}
		} else if (event.keyCode == 65) {
			camera[0] -= 0.04;
			camNow[0] -= 0.04;
			glMatrix.mat4.lookAt(
				view,
				camera, // camera position
				camNow, // the point where camera looks at
				[0, 1, 0] // up vector of the camera
			);
			gl.uniformMatrix4fv(uView, false, view);
		} else if (event.keyCode == 68) {
			camera[0] += 0.04;
			camNow[0] += 0.04;
			glMatrix.mat4.lookAt(
				view,
				camera, // camera position
				camNow, // the point where camera looks at
				[0, 1, 0] // up vector of the camera
			);
			gl.uniformMatrix4fv(uView, false, view);
		}
	}

	document.addEventListener("keydown", onKeyPressed, false);

	function render() {
        vertices = [...vertic, ...cube];
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array(vertices),
			gl.STATIC_DRAW
		);
		gl.uniform3fv(uLightPosition, lightPosition);
		// Init the model matrix
		var model = glMatrix.mat4.create();
		gl.uniformMatrix4fv(uModel, false, model);
		// Set the model matrix for normal vector
		var normalModel = glMatrix.mat3.create();
		glMatrix.mat3.normalFromMat4(normalModel, model);
		gl.uniformMatrix3fv(uNormalModel, false, normalModel);
		// Reset the frame buffer
		gl.enable(gl.DEPTH_TEST);
		gl.clearColor(0.1, 0.1, 0.1, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
		requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
}