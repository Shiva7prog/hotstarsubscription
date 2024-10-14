
let plan = prompt("Select a subscription plan:\n1. basic\n2. premium\n3. vip\n\nEnter the plan :");

switch (plan) {
    case 'basic':
        alert("You selected the Basic Plan.\nDetails:\n- Access to limited content\n- SD quality streaming\n- Ads included\n\nPrice: $5 per month");
        break;
    
    case 'premium':
        alert("You selected the Premium Plan.\nDetails:\n- Access to all content\n- HD quality streaming\n- Ad-free experience\n\nPrice: $10 per month");
        break;
    
    case 'vip':
        alert("You selected the VIP Plan.\nDetails:\n- Access to exclusive content\n- HD quality streaming\n- Some ads included\n\nPrice: $7 per month");
        break;
    
    default:
        alert("Invalid selection. Please enter a valid plan number (1, 2, or 3).");
        break;
}
