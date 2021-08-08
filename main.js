// initializing variables - inputting data
let socialProtectionBillion = 302;
let personalSocialServicesBillion = 40;
let healthBillion = 230;
let transportBillion = 51;
let educationBillion = 124;
let defenceBillion = 60;
let industryBillion = 70;
let housingBillion = 33;
let publicOrderBillion = 41;
let debtInterestBillion = 45;
let otherBillion = 57;

let totalBillion = socialProtectionBillion
+ personalSocialServicesBillion 
+ healthBillion 
+ transportBillion 
+ educationBillion 
+ defenceBillion 
+ industryBillion 
+ housingBillion 
+ publicOrderBillion
+ debtInterestBillion;


let socialProtectionPercent = socialProtectionBillion / totalBillion;
let personalSocialServicesPercent = personalSocialServicesBillion / totalBillion;;
let healthPercent = healthBillion / totalBillion;
let transportPercent = transportBillion / totalBillion;
let educationPercent = educationBillion / totalBillion;
let defencePercent = defenceBillion / totalBillion;
let industryPercent = industryBillion / totalBillion;
let housingPercent = housingBillion / totalBillion;
let publicOrderPercent = publicOrderBillion / totalBillion;
let debtInterestPercent = debtInterestBillion / totalBillion;
let otherPercent = otherBillion / totalBillion;

let taxFreeAmount = 12570;

// DOM init
let taxContribution = document.getElementById('tax_contribution_val');
let inputSalary = document.getElementById('salary_val');
let taxContributionOut = document.getElementById('tax_contribution_2');




    // Know contribution
    let socialProtectionResult1 = document.getElementById('social_protection_result_1');
    let PersonalSocialResult1 = document.getElementById('personal_social_result_1');
    let healthResult1 = document.getElementById('health_result_1');
    let transportResult1 = document.getElementById('transport_result_1');
    let educationResult1 = document.getElementById('education_result_1');
    let defenceResult1 = document.getElementById('defence_result_1');
    let industryAgricultureResult1 = document.getElementById('industry_agriculture_result_1');
    let housingEnvironmentResult1 = document.getElementById('housing_environment_result_1');
    let publicOrderResult1 = document.getElementById('public_order_result_1');
    let debtInterestResult1 = document.getElementById('debt_interest_result_1');
    let otherResult1 = document.getElementById('other_contributions_result_1');

    // don't know contribution
    let socialProtectionResult2 = document.getElementById('social_protection_result_2');
    let PersonalSocialResult2 = document.getElementById('personal_social_result_2');
    let healthResult2 = document.getElementById('health_result_2');
    let transportResult2 = document.getElementById('transport_result_2');
    let educationResult2 = document.getElementById('education_result_2');
    let defenceResult2 = document.getElementById('defence_result_2');
    let industryAgricultureResult2 = document.getElementById('industry_agriculture_result_2');
    let housingEnvironmentResult2 = document.getElementById('housing_environment_result_2');
    let publicOrderResult2 = document.getElementById('public_order_result_2');
    let debtInterestResult2 = document.getElementById('debt_interest_result_2');
    let otherResult2 = document.getElementById('other_contributions_result_2');
    
    



document.querySelector('form#know_form').addEventListener('submit', function (e) {
    e.preventDefault();
     
    if(taxContribution !== null){
    socialProtectionResult1.innerHTML = (taxContribution.value * socialProtectionPercent).toFixed(2);
    PersonalSocialResult1.innerHTML = (taxContribution.value * personalSocialServicesPercent).toFixed(2);
    healthResult1.innerHTML = (taxContribution.value * healthPercent).toFixed(2);
    transportResult1.innerHTML = (taxContribution.value * transportPercent).toFixed(2);
    educationResult1.innerHTML = (taxContribution.value * educationPercent).toFixed(2);
    defenceResult1.innerHTML = (taxContribution.value * defencePercent).toFixed(2);
    industryAgricultureResult1.innerHTML = (taxContribution.value * industryPercent).toFixed(2);
    housingEnvironmentResult1.innerHTML = (taxContribution.value * housingPercent).toFixed(2);
    publicOrderResult1.innerHTML = (taxContribution.value * publicOrderPercent).toFixed(2);
    debtInterestResult1.innerHTML = (taxContribution.value * debtInterestPercent).toFixed(2);
    otherResult1.innerHTML = (taxContribution.value * otherPercent).toFixed(2);
    }
});



document.querySelector('form#dont_know_form').addEventListener('submit', function(e){
    e.preventDefault();

    taxContribution2 = ((inputSalary.value - taxFreeAmount) * 0.32).toFixed(2);

    if(inputSalary !== null){
    taxContributionOut.innerHTML = ((inputSalary.value - taxFreeAmount) * 0.32).toFixed(2);
    socialProtectionResult2.innerHTML = (taxContribution2 * socialProtectionPercent).toFixed(2);
    PersonalSocialResult2.innerHTML = (taxContribution2 * personalSocialServicesPercent).toFixed(2);
    healthResult2.innerHTML = (taxContribution2 * healthPercent).toFixed(2);
    transportResult2.innerHTML = (taxContribution2 * transportPercent).toFixed(2);
    educationResult2.innerHTML = (taxContribution2 * educationPercent).toFixed(2);
    defenceResult2.innerHTML = (taxContribution2 * defencePercent).toFixed(2);
    industryAgricultureResult2.innerHTML = (taxContribution2 * industryPercent).toFixed(2);
    housingEnvironmentResult2.innerHTML = (taxContribution2 * housingPercent).toFixed(2);
    publicOrderResult2.innerHTML = (taxContribution2 * publicOrderPercent).toFixed(2);
    debtInterestResult2.innerHTML = (taxContribution2 * debtInterestPercent).toFixed(2);
    otherResult2.innerHTML = (taxContribution2 * otherPercent).toFixed(2);
    }
});





