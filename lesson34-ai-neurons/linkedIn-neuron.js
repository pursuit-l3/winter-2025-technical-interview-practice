class Neuron {
  constructor(numInputs) {
    // Initialize weights randomly between -1 and 1
    this.weights = Array(numInputs)
      .fill()
      .map(() => Math.random() * 2 - 1);

    // Initialize bias randomly between -1 and 1
    this.bias = Math.random() * 2 - 1;
  }

  // Activation function (sigmoid)
  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }

  // Forward pass - process inputs and return output
  forward(inputs) {
    // Check if inputs match weights length
    if (inputs.length !== this.weights.length) {
      throw new Error(
        `Expected ${this.weights.length} inputs, but got ${inputs.length}`
      );
    }

    // Calculate weighted sum
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * this.weights[i];
    }

    // Add bias
    sum += this.bias;

    // Apply activation function and return
    return this.sigmoid(sum);
  }

  // Train the neuron using simple gradient descent
  train(inputs, targetOutput, learningRate = 0.1) {
    // Forward pass
    const prediction = this.forward(inputs);

    // Calculate error
    const error = targetOutput - prediction;

    // Calculate gradient for sigmoid: output * (1 - output)
    const gradient = prediction * (1 - prediction);

    // Update weights
    for (let i = 0; i < this.weights.length; i++) {
      // Weight update rule: input * error * gradient * learning rate
      this.weights[i] += inputs[i] * error * gradient * learningRate;
    }

    // Update bias
    this.bias += error * gradient * learningRate;

    // Return error for monitoring
    return error;
  }
}

// Function to visualize the decision boundary and data points
function visualizeLinkedInReach(neuron, trainingData) {
  console.log("LinkedIn Reach Classification Boundary:");
  console.log("w1 (Followers weight): " + neuron.weights[0].toFixed(2));
  console.log("w2 (Weekly Posts weight): " + neuron.weights[1].toFixed(2));
  console.log("bias: " + neuron.bias.toFixed(2));

  // The decision boundary: w1*followers + w2*posts + bias = 0
  // Rearranged: posts = (-w1*followers - bias) / w2

  const slope = -neuron.weights[0] / neuron.weights[1];
  const intercept = -neuron.bias / neuron.weights[1];

  console.log(
    `\nDecision boundary equation: Weekly Posts = ${slope.toFixed(
      2
    )} × Followers + ${intercept.toFixed(2)}`
  );
  console.log(
    "\nThis means that for a given number of followers, posting more than this equation"
  );
  console.log(
    "suggests the account will have high reach, while posting less suggests low reach."
  );

  // Find range of data for visualization
  let maxFollowers = 0;
  let maxPosts = 0;
  for (const example of trainingData) {
    maxFollowers = Math.max(maxFollowers, example.inputs[0]);
    maxPosts = Math.max(maxPosts, example.inputs[1]);
  }

  // Round up to nearest 1000 for followers and 5 for posts for better visualization
  maxFollowers = Math.ceil(maxFollowers / 1000) * 1000;
  maxPosts = Math.ceil(maxPosts / 5) * 5;

  // Grid size for visualization
  const gridSize = 30;
  const followerStep = maxFollowers / gridSize;
  const postStep = maxPosts / gridSize;

  // Create visualization
  console.log(
    "\nVisualization (■ = High Reach, □ = Low Reach, ● = Training Data High Reach, ○ = Training Data Low Reach):"
  );
  console.log(`X-axis: Followers (0 to ${maxFollowers})`);
  console.log(`Y-axis: Weekly Posts (0 to ${maxPosts})`);
  console.log("");

  // Plot the grid and decision boundary
  for (let y = gridSize - 1; y >= 0; y--) {
    let row = "";
    const posts = y * postStep;

    for (let x = 0; x < gridSize; x++) {
      const followers = x * followerStep;

      // Check if there's a training point at this position
      let hasPoint = false;
      let isHighReach = false;

      for (const example of trainingData) {
        const exampleFollowers = example.inputs[0];
        const examplePosts = example.inputs[1];

        // Check if this grid cell contains a training point
        if (
          Math.abs(followers - exampleFollowers) < followerStep / 2 &&
          Math.abs(posts - examplePosts) < postStep / 2
        ) {
          hasPoint = true;
          isHighReach = example.output === 1;
          break;
        }
      }

      if (hasPoint) {
        // Use different symbols for training data points
        row += isHighReach ? "● " : "○ ";
      } else {
        // Get prediction for this point
        const prediction = neuron.forward([followers, posts]);
        row += prediction > 0.5 ? "■ " : "□ ";
      }
    }
    row += " " + posts.toFixed(0); // Add y-axis labels
    console.log(row);
  }

  // Add x-axis labels
  let xLabel = "  ";
  for (let x = 0; x < gridSize; x += 5) {
    const followers = x * followerStep;
    xLabel += followers.toFixed(0).padStart(9, " ");
  }
  console.log(xLabel);
}

// LinkedIn reach classifier
// Inputs: [followers (thousands), weekly posts]
// Output: 1 for high reach, 0 for low reach
const linkedInNeuron = new Neuron(2);

// Sample data: [followers(thousands), weekly posts] -> high reach (1) or low reach (0)
const linkedInData = [
  { inputs: [0.5, 1], output: 0 }, // 500 followers, 1 post/week - low reach
  { inputs: [1.0, 1], output: 0 }, // 1,000 followers, 1 post/week - low reach
  { inputs: [2.0, 2], output: 0 }, // 2,000 followers, 2 posts/week - low reach
  { inputs: [3.0, 1], output: 0 }, // 3,000 followers, 1 post/week - low reach
  { inputs: [1.5, 5], output: 1 }, // 1,500 followers, 5 posts/week - high reach
  { inputs: [4.0, 3], output: 1 }, // 4,000 followers, 3 posts/week - high reach
  { inputs: [5.0, 2], output: 1 }, // 5,000 followers, 2 posts/week - high reach
  { inputs: [2.5, 4], output: 1 }, // 2,500 followers, 4 posts/week - high reach
  { inputs: [3.5, 3], output: 1 }, // 3,500 followers, 3 posts/week - high reach
  { inputs: [0.8, 3], output: 0 }, // 800 followers, 3 posts/week - low reach
  { inputs: [7.0, 1], output: 1 }, // 7,000 followers, 1 post/week - high reach (large follower base)
  { inputs: [0.3, 6], output: 0 }, // 300 followers, 6 posts/week - low reach (not enough followers)
];

// Train the neuron
console.log("Training LinkedIn reach classifier...");
for (let epoch = 0; epoch < 5000; epoch++) {
  let totalError = 0;
  for (const example of linkedInData) {
    const error = linkedInNeuron.train(example.inputs, example.output, 0.05);
    totalError += Math.abs(error);
  }
  if (epoch % 1000 === 0) {
    console.log(
      `Epoch ${epoch}, Average Error: ${(
        totalError / linkedInData.length
      ).toFixed(4)}`
    );
  }
}

// Visualize the decision boundary
visualizeLinkedInReach(linkedInNeuron, linkedInData);

// Test the neuron on new examples
console.log("\nTesting new LinkedIn profiles:");
const testProfiles = [
  { followers: 1.2, posts: 2 }, // 1,200 followers, 2 posts/week
  { followers: 2.0, posts: 4 }, // 2,000 followers, 4 posts/week
  { followers: 6.0, posts: 1 }, // 6,000 followers, 1 post/week
  { followers: 0.6, posts: 5 }, // 600 followers, 5 posts/week
];

for (const profile of testProfiles) {
  const prediction = linkedInNeuron.forward([profile.followers, profile.posts]);
  const reachCategory = prediction > 0.5 ? "High Reach" : "Low Reach";
  const confidence = Math.abs(prediction - 0.5) * 2 * 100; // Convert to percentage confidence

  console.log(
    `Profile with ${profile.followers * 1000} followers and ${
      profile.posts
    } weekly posts:`
  );
  console.log(
    `Prediction: ${reachCategory} (${confidence.toFixed(1)}% confidence)`
  );
  console.log("");
}
