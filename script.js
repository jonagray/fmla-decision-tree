document.addEventListener("DOMContentLoaded", () => {
  const decisionTree = document.getElementById('decision-tree');
  const trackSelection = document.getElementById('track-selection');

  const tracks = {
      self: [
          {
              question: "Have you been employed at King County for at least 12 months in the past 7 years?",
              yes: 1,
              no: -1
          },
          {
              question: "Have you worked at least 1,250 (1,040 for bus operators) hours in the past 12 months?",
              yes: 2,
              no: -1
          },
          {
              question: `You are eligible for FMLA leave for yourself. Contact <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> to apply. Be sure to submit the following completed documents: 
              <ul>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Leave Request Form</a></li>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-employee.pdf?rev=06526780c3254a95aa1bffa80c00e122&hash=35DB39B498C882BDF7C052DEB7DF60CF" target="_blank">Medical Certification for Employee's Serious Health Condition</a></li>
              </ul>`,
              yes: null,
              no: null
          }
      ],
      family: [
          {
              question: "Does your family member have a serious health condition? (Link to list of example qualifying health conditions)",
              yes: 1,
              no: -1
          },
          {
              question: "Have you been employed at King County for at least 12 months in the past 7 years?",
              yes: 2,
              no: -1
          },
          {
              question: "Have you worked at least 1,250 (1,040 for bus operators) hours in the past 12 months?",
              yes: 3,
              no: -1
          },
          {
              question: `You are eligible for FMLA leave to care for a family member. Contact <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> to apply. Be sure to submit the following completed documents: 
              <ul>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Leave Request Form</a></li>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-family-member.pdf?rev=cc9c1585eece442eb338d5c3b0f0b98c&hash=90F4BD3D843ED08CE6CDE480A25386F5" target="_blank">Medical Certification for Family Member's Serious Health Condition</a></li>
              </ul>`,
              yes: null,
              no: null
          }
      ],
      newborn: [
          {
              question: "Are you the biological parent, adoptive parent, or foster parent of the newborn?",
              yes: 1,
              no: -1
          },
          {
              question: "Have you been employed at King County for at least 12 months in the past 7 years?",
              yes: 2,
              no: -1
          },
          {
              question: "Have you worked at least 1,250 (1,040 for bus operators) hours in the past 12 months?",
              yes: 3,
              no: -1
          },
          {
              question: `You are eligible for FMLA leave to care for a newborn. Contact <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> to apply. Be sure to submit the following completed documents: 
              <ul>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Leave Request Form</a></li>
                  <li>Proof of Live Birth Document (as soon as possible after birth - provided by the hospital)</li>
              </ul>`,
              yes: null,
              no: null
          }
      ]
  };

  let currentTrack = null;
  let currentNode = 0;

  function startTrack(track) {
      currentTrack = tracks[track];
      currentNode = 0;
      trackSelection.style.display = 'none';
      renderNode(currentNode);
  }

  function renderNode(nodeIndex) {
      const node = currentTrack[nodeIndex];
      decisionTree.innerHTML = '';

      const nodeElement = document.createElement('div');
      nodeElement.className = 'decision-node';

      const questionElement = document.createElement('div');
      questionElement.innerHTML = node.question;
      nodeElement.appendChild(questionElement);

      if (node.yes !== null) {
          const yesButton = document.createElement('button');
          yesButton.innerText = 'Yes';
          yesButton.onclick = () => {
              if (currentTrack[node.yes] === undefined) {
                  showNonEligibilityMessage();
              } else {
                  currentNode = node.yes;
                  renderNode(currentNode);
              }
          };
          nodeElement.appendChild(yesButton);
      }

      if (node.no !== null) {
          const noButton = document.createElement('button');
          noButton.innerText = 'No';
          noButton.onclick = () => {
              if (currentTrack[node.no] === undefined) {
                  showNonEligibilityMessage();
              } else {
                  currentNode = node.no;
                  renderNode(currentNode);
              }
          };
          nodeElement.appendChild(noButton);
      }

      decisionTree.appendChild(nodeElement);
  }

  function showNonEligibilityMessage() {
      decisionTree.innerHTML = `
          <div class="decision-node">
              <p>You are unable to qualify for FMLA at this time. Please visit 
              <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">
              this page</a> for additional information on potential next steps.</p>
          </div>
      `;
  }

  window.startTrack = startTrack;
});
