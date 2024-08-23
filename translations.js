const translations = {
  en: {
    title: "FMLA Leave Decision Tree",
    selfBtn: "FMLA for Yourself",
    familyBtn: "FMLA for a Family Member",
    newbornBtn: "FMLA for a Newborn",
    selfTrackTitle: "FMLA for Yourself",
    selfQuestion1: "Have you been employed at King County for at least 12 months in the past 7 years?",
    selfQuestion2: "Have you worked at least 1,250 hours in the past 12 months?",
    selfEligibleMessage: `You may be eligible for FMLA leave for yourself. Contact <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> to apply. Be sure to submit the following completed documents:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Leave Request Form</a></li>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-employee.pdf?rev=06526780c3254a95aa1bffa80c00e122&hash=35DB39B498C882BDF7C052DEB7DF60CF" target="_blank">Medical Certification for Employee's Serious Health Condition</a></li>
        </ul>`,
    familyTrackTitle: "FMLA for a Family Member",
    familyQuestion1: "Does your family member have a serious health condition?",
    familyQuestion2: "Have you been employed at King County for at least 12 months in the past 7 years?",
    familyQuestion3: "Have you worked at least 1,250 hours in the past 12 months?",
    familyEligibleMessage: `You may be eligible for FMLA leave to care for a family member. Contact <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> to apply. Be sure to submit the following completed documents: 
              <ul>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Leave Request Form</a></li>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-family-member.pdf?rev=cc9c1585eece442eb338d5c3b0f0b98c&hash=90F4BD3D843ED08CE6CDE480A25386F5" target="_blank">Medical Certification for Family Member's Serious Health Condition</a></li>
              </ul>`,
    newbornTrackTitle: "FMLA for a Newborn",
    newbornQuestion1: "Are you the biological, adoptive, or foster parent of the newborn?",
    newbornQuestion2: "Have you been employed at King County for at least 12 months in the past 7 years?",
    newbornQuestion3: "Have you worked at least 1,250 hours in the past 12 months?",
    newbornEligibleMessage: `You may be eligible for FMLA leave to care for a newborn. Contact <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> to apply. Be sure to submit the following completed documents:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Leave Request Form</a></li>
            <li>Proof of Live Birth Document (as soon as possible after birth - provided by the hospital)</li>
        </ul>`,
    newbornAdditionalQuestion: "Is the date of birth estimated to occur at 6 or more months of active employment at King County?",
    newbornPPLMessage: `You are unable to qualify for FMLA at this time, but potentially eligible for Supplemental Paid Parental Leave (PPL). Please visit 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">this page</a> for additional information on potential next steps.`,
    newbornNoPPLMessage: `<p>You are unable to qualify for Supplemental Paid Parental Leave (PPL) at this time. Please visit 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">this page</a> for additional information on potential next steps.</p>
        <p>In addition, while you may not be eligible for FMLA/KCFML or PPL, you still may be able to qualify for Washington State PFML. 
        Visit the <a href="https://paidleave.wa.gov/get-ready-to-apply/" target="_blank">Washington State PFML website</a> for additional information.</p>`,
    notEligibleMessage: "You are not eligible for FMLA at this time. Please contact HR for further assistance."
  },
  es: {
    title: "Árbol de Decisiones de Permiso FMLA",
    selfBtn: "FMLA para usted mismo",
    familyBtn: "FMLA para un miembro de la familia",
    newbornBtn: "FMLA para un recién nacido",
    selfTrackTitle: "FMLA para usted mismo",
    selfQuestion1: "¿Ha trabajado en el Condado de King durante al menos 12 meses en los últimos 7 años?",
    selfQuestion2: "¿Ha trabajado al menos 1,250 horas en los últimos 12 meses?",
    selfEligibleMessage: `Es posible que sea elegible para un permiso FMLA para usted mismo. Comuníquese con <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> para aplicar. Asegúrese de enviar los siguientes documentos completados:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Formulario de solicitud de permiso</a></li>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-employee.pdf?rev=06526780c3254a95aa1bffa80c00e122&hash=35DB39B498C882BDF7C052DEB7DF60CF" target="_blank">Certificación médica para la condición grave de salud del empleado</a></li>
        </ul>`,
    familyTrackTitle: "FMLA para un miembro de la familia",
    familyQuestion1: "¿Tiene su familiar una condición médica grave?",
    familyQuestion2: "¿Ha trabajado en el Condado de King durante al menos 12 meses en los últimos 7 años?",
    familyQuestion3: "¿Ha trabajado al menos 1,250 horas en los últimos 12 meses?",
    familyEligibleMessage: `Es posible que sea elegible para un permiso FMLA para cuidar a un miembro de la familia. Comuníquese con <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> para aplicar. Asegúrese de enviar los siguientes documentos completados:
              <ul>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Formulario de solicitud de permiso</a></li>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-family-member.pdf?rev=cc9c1585eece442eb338d5c3b0f0b98c&hash=90F4BD3D843ED08CE6CDE480A25386F5" target="_blank">Certificación médica para la condición grave de salud de un miembro de la familia</a></li>
              </ul>`,
    newbornTrackTitle: "FMLA para un recién nacido",
    newbornQuestion1: "¿Es usted el padre biológico, adoptivo o de crianza del recién nacido?",
    newbornQuestion2: "¿Ha trabajado en el Condado de King durante al menos 12 meses en los últimos 7 años?",
    newbornQuestion3: "¿Ha trabajado al menos 1,250 horas en los últimos 12 meses?",
    newbornEligibleMessage: `Es posible que sea elegible para un permiso FMLA para cuidar a un recién nacido. Comuníquese con <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> para aplicar. Asegúrese de enviar los siguientes documentos completados:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Formulario de solicitud de permiso</a></li>
            <li>Documento de prueba de nacimiento vivo (lo antes posible después del nacimiento, proporcionado por el hospital)</li>
        </ul>`,
    newbornAdditionalQuestion: "¿Se estima que la fecha de nacimiento ocurrirá a los 6 o más meses de empleo activo en el Condado de King?",
    newbornPPLMessage: `No puede calificar para FMLA en este momento, pero puede ser elegible para el Permiso Parental Pagado Suplementario (PPL). Por favor, visite 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">esta página</a> para obtener información adicional sobre los próximos pasos.`,
    newbornNoPPLMessage: `<p>No puede calificar para el Permiso Parental Pagado Suplementario (PPL) en este momento. Por favor, visite 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">esta página</a> para obtener información adicional sobre los próximos pasos.</p>
        <p>Además, aunque no sea elegible para FMLA/KCFML o PPL, aún puede calificar para PFML del estado de Washington. 
        Visite el <a href="https://paidleave.wa.gov/get-ready-to-apply/" target="_blank">sitio web de PFML del estado de Washington</a> para obtener información adicional.</p>`,
    notEligibleMessage: "No es elegible para FMLA en este momento. Comuníquese con Recursos Humanos para obtener más ayuda."
  },
  vi: {
    title: "Cây Quyết Định Nghỉ Phép FMLA",
    selfBtn: "FMLA cho Chính Bạn",
    familyBtn: "FMLA cho Thành Viên Gia Đình",
    newbornBtn: "FMLA cho Trẻ Sơ Sinh",
    selfTrackTitle: "FMLA cho Chính Bạn",
    selfQuestion1: "Bạn có làm việc tại Quận King ít nhất 12 tháng trong 7 năm qua không?",
    selfQuestion2: "Bạn có làm việc ít nhất 1.250 giờ trong 12 tháng qua không?",
    selfEligibleMessage: `Bạn có thể đủ điều kiện nghỉ phép FMLA cho chính mình. Liên hệ với <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> để đăng ký. Hãy nhớ nộp các tài liệu sau đã được hoàn thành:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Mẫu Đơn Xin Nghỉ Phép</a></li>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-employee.pdf?rev=06526780c3254a95aa1bffa80c00e122&hash=35DB39B498C882BDF7C052DEB7DF60CF" target="_blank">Chứng Nhận Y Tế cho Tình Trạng Sức Khỏe Nghiêm Trọng của Nhân Viên</a></li>
        </ul>`,
    familyTrackTitle: "FMLA cho Thành Viên Gia Đình",
    familyQuestion1: "Thành viên gia đình của bạn có tình trạng sức khỏe nghiêm trọng không?",
    familyQuestion2: "Bạn có làm việc tại Quận King ít nhất 12 tháng trong 7 năm qua không?",
    familyQuestion3: "Bạn có làm việc ít nhất 1.250 giờ trong 12 tháng qua không?",
    familyEligibleMessage: `Bạn có thể đủ điều kiện nghỉ phép FMLA để chăm sóc thành viên gia đình. Liên hệ với <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> để đăng ký. Hãy nhớ nộp các tài liệu sau đã được hoàn thành:
              <ul>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Mẫu Đơn Xin Nghỉ Phép</a></li>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-family-member.pdf?rev=cc9c1585eece442eb338d5c3b0f0b98c&hash=90F4BD3D843ED08CE6CDE480A25386F5" target="_blank">Chứng Nhận Y Tế cho Tình Trạng Sức Khỏe Nghiêm Trọng của Thành Viên Gia Đình</a></li>
              </ul>`,
    newbornTrackTitle: "FMLA cho Trẻ Sơ Sinh",
    newbornQuestion1: "Bạn có phải là cha/mẹ ruột, cha/mẹ nuôi, hoặc cha/mẹ nuôi dưỡng của trẻ sơ sinh không?",
    newbornQuestion2: "Bạn có làm việc tại Quận King ít nhất 12 tháng trong 7 năm qua không?",
    newbornQuestion3: "Bạn có làm việc ít nhất 1.250 giờ trong 12 tháng qua không?",
    newbornEligibleMessage: `Bạn có thể đủ điều kiện nghỉ phép FMLA để chăm sóc trẻ sơ sinh. Liên hệ với <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> để đăng ký. Hãy nhớ nộp các tài liệu sau đã được hoàn thành:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Mẫu Đơn Xin Nghỉ Phép</a></li>
            <li>Tài liệu Chứng Minh Trẻ Sơ Sinh (càng sớm càng tốt sau khi sinh - do bệnh viện cung cấp)</li>
        </ul>`,
    newbornAdditionalQuestion: "Ngày dự sinh có ước tính là 6 tháng trở lên làm việc tích cực tại Quận King không?",
    newbornPPLMessage: `Bạn không thể đủ điều kiện cho FMLA tại thời điểm này, nhưng có thể đủ điều kiện cho Nghỉ Phép Có Trả Tiền Bổ Sung (PPL). Vui lòng truy cập 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">trang này</a> để biết thêm thông tin về các bước tiếp theo.`,
    newbornNoPPLMessage: `<p>Bạn không thể đủ điều kiện cho Nghỉ Phép Có Trả Tiền Bổ Sung (PPL) tại thời điểm này. Vui lòng truy cập 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">trang này</a> để biết thêm thông tin về các bước tiếp theo.</p>
        <p>Hơn nữa, mặc dù bạn có thể không đủ điều kiện cho FMLA/KCFML hoặc PPL, nhưng bạn vẫn có thể đủ điều kiện cho PFML của Tiểu Bang Washington. 
        Truy cập <a href="https://paidleave.wa.gov/get-ready-to-apply/" target="_blank">trang web PFML của Tiểu Bang Washington</a> để biết thêm thông tin.</p>`,
    notEligibleMessage: "Bạn không đủ điều kiện cho FMLA vào thời điểm này. Vui lòng liên hệ với Phòng Nhân Sự để được hỗ trợ thêm."
  },
  so: {
    title: "Go'aan qaadashada Fasaxa FMLA",
    selfBtn: "FMLA adiga kuu gaar ah",
    familyBtn: "FMLA xubin qoyskaaga ka tirsan",
    newbornBtn: "FMLA Ilmo cusub",
    selfTrackTitle: "FMLA adiga kuu gaar ah",
    selfQuestion1: "Ma ka shaqeysay Degmada King ugu yaraan 12 bilood 7-dii sano ee la soo dhaafay?",
    selfQuestion2: "Ma ka shaqeysay ugu yaraan 1,250 saacadood 12-kii bilood ee la soo dhaafay?",
    selfEligibleMessage: `Waxaad u qalmi kartaa fasaxa FMLA ee adiga kuu gaar ah. La xiriir <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> si aad u codsato. Hubi inaad soo gudbiso dukumentiyada soo socda ee la dhameeyay:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Foomka codsiga fasaxa</a></li>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-employee.pdf?rev=06526780c3254a95aa1bffa80c00e122&hash=35DB39B498C882BDF7C052DEB7DF60CF" target="_blank">Shahaadada Caafimaadka ee Xaaladda Caafimaad ee Adag ee Shaqaalaha</a></li>
        </ul>`,
    familyTrackTitle: "FMLA xubin qoyskaaga ka tirsan",
    familyQuestion1: "Xubin qoyskaaga ka tirsan ma leeyahay xaalad caafimaad oo halis ah?",
    familyQuestion2: "Ma ka shaqeysay Degmada King ugu yaraan 12 bilood 7-dii sano ee la soo dhaafay?",
    familyQuestion3: "Ma ka shaqeysay ugu yaraan 1,250 saacadood 12-kii bilood ee la soo dhaafay?",
    familyEligibleMessage: `Waxaad u qalmi kartaa fasaxa FMLA si aad u daryeesho xubin qoyskaaga ka tirsan. La xiriir <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> si aad u codsato. Hubi inaad soo gudbiso dukumentiyada soo socda ee la dhameeyay:
              <ul>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Foomka codsiga fasaxa</a></li>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-family-member.pdf?rev=cc9c1585eece442eb338d5c3b0f0b98c&hash=90F4BD3D843ED08CE6CDE480A25386F5" target="_blank">Shahaadada Caafimaadka ee Xaaladda Caafimaad ee Adag ee Xubin Qoyska</a></li>
              </ul>`,
    newbornTrackTitle: "FMLA Ilmo cusub",
    newbornQuestion1: "Ma tahay waalidka dhabta ah, korsashada, ama daryeelka ilmaha cusub?",
    newbornQuestion2: "Ma ka shaqeysay Degmada King ugu yaraan 12 bilood 7-dii sano ee la soo dhaafay?",
    newbornQuestion3: "Ma ka shaqeysay ugu yaraan 1,250 saacadood 12-kii bilood ee la soo dhaafay?",
    newbornEligibleMessage: `Waxaad u qalmi kartaa fasaxa FMLA si aad u daryeesho ilmo cusub. La xiriir <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> si aad u codsato. Hubi inaad soo gudbiso dukumentiyada soo socda ee la dhameeyay:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Foomka codsiga fasaxa</a></li>
            <li>Dukumeenti Caddeyn Dhalaalka ah (sida ugu dhakhsaha badan ee suurtogalka ah ka dib dhalashada - waxaa bixiya isbitaalka)</li>
        </ul>`,
    newbornAdditionalQuestion: "Maalinta dhalmada ma la filayaa inay dhacdo ugu yaraan 6 bilood oo shaqo firfircoon ah ee Degmada King?",
    newbornPPLMessage: `Waqtigan xaadirka ah, uma qalmi kartid FMLA, laakiin waxaa laga yaabaa inaad u qalanto Fasaxa Loo Bixiyo ee Loo Qorsheeyay (PPL). Fadlan booqo 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">boggan</a> si aad u hesho macluumaad dheeri ah oo ku saabsan tillaabooyinka xiga.`,
    newbornNoPPLMessage: `<p>Waqtigan xaadirka ah uma qalmi kartid Fasaxa Loo Bixiyo ee Loo Qorsheeyay (PPL). Fadlan booqo 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">boggan</a> si aad u hesho macluumaad dheeri ah oo ku saabsan tillaabooyinka xiga.</p>
        <p>Intaa waxaa dheer, in kasta oo laga yaabo inaadan u qalmin FMLA/KCFML ama PPL, haddana waad awoodi kartaa inaad u qalanto PFML-ka Gobolka Washington. 
        Booqo <a href="https://paidleave.wa.gov/get-ready-to-apply/" target="_blank">bogga PFML-ka Gobolka Washington</a> si aad u hesho macluumaad dheeri ah.</p>`,
    notEligibleMessage: "Waqtigan xaadirka ah uma qalmi kartid FMLA. Fadlan la xiriir HR si aad u hesho gargaar dheeraad ah."
  },
  ru: {
    title: "Дерево принятия решений по отпуску FMLA",
    selfBtn: "FMLA для себя",
    familyBtn: "FMLA для члена семьи",
    newbornBtn: "FMLA для новорожденного",
    selfTrackTitle: "FMLA для себя",
    selfQuestion1: "Вы проработали в округе Кинг не менее 12 месяцев за последние 7 лет?",
    selfQuestion2: "Вы проработали не менее 1250 часов за последние 12 месяцев?",
    selfEligibleMessage: `Вы можете иметь право на отпуск FMLA для себя. Свяжитесь с <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a>, чтобы подать заявку. Обязательно предоставьте следующие заполненные документы:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Форма запроса на отпуск</a></li>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-employee.pdf?rev=06526780c3254a95aa1bffa80c00e122&hash=35DB39B498C882BDF7C052DEB7DF60CF" target="_blank">Медицинская справка о серьезном состоянии здоровья сотрудника</a></li>
        </ul>`,
    familyTrackTitle: "FMLA для члена семьи",
    familyQuestion1: "У члена вашей семьи есть серьезное заболевание?",
    familyQuestion2: "Вы проработали в округе Кинг не менее 12 месяцев за последние 7 лет?",
    familyQuestion3: "Вы проработали не менее 1250 часов за последние 12 месяцев?",
    familyEligibleMessage: `Вы можете иметь право на отпуск FMLA для ухода за членом семьи. Свяжитесь с <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a>, чтобы подать заявку. Обязательно предоставьте следующие заполненные документы:
              <ul>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Форма запроса на отпуск</a></li>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-family-member.pdf?rev=cc9c1585eece442eb338d5c3b0f0b98c&hash=90F4BD3D843ED08CE6CDE480A25386F5" target="_blank">Медицинская справка о серьезном состоянии здоровья члена семьи</a></li>
              </ul>`,
    newbornTrackTitle: "FMLA для новорожденного",
    newbornQuestion1: "Вы являетесь биологическим, приемным или опекунским родителем новорожденного?",
    newbornQuestion2: "Вы проработали в округе Кинг не менее 12 месяцев за последние 7 лет?",
    newbornQuestion3: "Вы проработали не менее 1250 часов за последние 12 месяцев?",
    newbornEligibleMessage: `Вы можете иметь право на отпуск FMLA для ухода за новорожденным. Свяжитесь с <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a>, чтобы подать заявку. Обязательно предоставьте следующие заполненные документы:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Форма запроса на отпуск</a></li>
            <li>Документ, подтверждающий рождение живого ребенка (как можно скорее после рождения — предоставляется больницей)</li>
        </ul>`,
    newbornAdditionalQuestion: "Ожидается ли дата рождения через 6 или более месяцев активной работы в округе Кинг?",
    newbornPPLMessage: `На данный момент вы не можете претендовать на отпуск FMLA, но, возможно, имеете право на дополнительный оплачиваемый отпуск по уходу за ребенком (PPL). Пожалуйста, посетите 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">эту страницу</a> для получения дополнительной информации о дальнейших шагах.`,
    newbornNoPPLMessage: `<p>На данный момент вы не можете претендовать на дополнительный оплачиваемый отпуск по уходу за ребенком (PPL). Пожалуйста, посетите 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">эту страницу</a> для получения дополнительной информации о дальнейших шагах.</p>
        <p>Кроме того, хотя вы можете не иметь права на FMLA/KCFML или PPL, вы все же можете претендовать на PFML штата Вашингтон. 
        Посетите <a href="https://paidleave.wa.gov/get-ready-to-apply/" target="_blank">веб-сайт PFML штата Вашингтон</a> для получения дополнительной информации.</p>`,
    notEligibleMessage: "На данный момент вы не имеете права на отпуск FMLA. Пожалуйста, свяжитесь с отделом кадров для получения дополнительной помощи."
  },
  zh_CN: {
    title: "FMLA 休假决策树",
    selfBtn: "FMLA 自己申请",
    familyBtn: "FMLA 家庭成员申请",
    newbornBtn: "FMLA 新生儿申请",
    selfTrackTitle: "FMLA 自己申请",
    selfQuestion1: "在过去 7 年中，您是否在金县工作了至少 12 个月？",
    selfQuestion2: "在过去的 12 个月中，您是否至少工作了 1,250 小时？",
    selfEligibleMessage: `您可能有资格申请 FMLA 休假。联系 <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> 申请。请务必提交以下已完成的文件：
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">休假申请表</a></li>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-employee.pdf?rev=06526780c3254a95aa1bffa80c00e122&hash=35DB39B498C882BDF7C052DEB7DF60CF" target="_blank">员工严重健康状况的医疗证明</a></li>
        </ul>`,
    familyTrackTitle: "FMLA 家庭成员申请",
    familyQuestion1: "您的家庭成员是否有严重的健康状况？",
    familyQuestion2: "在过去 7 年中，您是否在金县工作了至少 12 个月？",
    familyQuestion3: "在过去的 12 个月中，您是否至少工作了 1,250 小时？",
    familyEligibleMessage: `您可能有资格申请 FMLA 休假以照顾家庭成员。联系 <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> 申请。请务必提交以下已完成的文件：
              <ul>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">休假申请表</a></li>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-family-member.pdf?rev=cc9c1585eece442eb338d5c3b0f0b98c&hash=90F4BD3D843ED08CE6CDE480A25386F5" target="_blank">家庭成员严重健康状况的医疗证明</a></li>
              </ul>`,
    newbornTrackTitle: "FMLA 新生儿申请",
    newbornQuestion1: "您是新生儿的生物学父母、养父母或寄养父母吗？",
    newbornQuestion2: "在过去 7 年中，您是否在金县工作了至少 12 个月？",
    newbornQuestion3: "在过去的 12 个月中，您是否至少工作了 1,250 小时？",
    newbornEligibleMessage: `您可能有资格申请 FMLA 休假以照顾新生儿。联系 <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> 申请。请务必提交以下已完成的文件：
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">休假申请表</a></li>
            <li>活产证明文件（出生后尽快由医院提供）</li>
        </ul>`,
    newbornAdditionalQuestion: "预产日期预计在金县积极就业 6 个月或更长时间内发生吗？",
    newbornPPLMessage: `您目前无法获得 FMLA 资格，但可能有资格获得补充带薪育儿假 (PPL)。请访问 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">此页面</a> 了解有关下一步的更多信息。`,
    newbornNoPPLMessage: `<p>您目前无法获得补充带薪育儿假 (PPL) 资格。请访问 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">此页面</a> 了解有关下一步的更多信息。</p>
        <p>此外，虽然您可能没有资格获得 FMLA/KCFML 或 PPL，但您仍可能有资格获得华盛顿州 PFML。 
        访问 <a href="https://paidleave.wa.gov/get-ready-to-apply/" target="_blank">华盛顿州 PFML 网站</a> 了解更多信息。</p>`,
    notEligibleMessage: "您目前没有资格享受 FMLA。请联系 HR 以获取进一步的帮助。"
  },
  ko: {
    title: "FMLA 휴가 결정 트리",
    selfBtn: "FMLA 본인용",
    familyBtn: "FMLA 가족 구성원용",
    newbornBtn: "FMLA 신생아용",
    selfTrackTitle: "FMLA 본인용",
    selfQuestion1: "지난 7년 동안 King County에서 12개월 이상 근무한 적이 있습니까?",
    selfQuestion2: "지난 12개월 동안 1,250시간 이상 근무한 적이 있습니까?",
    selfEligibleMessage: `본인을 위한 FMLA 휴가 자격이 있을 수 있습니다. 신청하려면 <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a>에 문의하십시오. 완료된 다음 문서를 제출해야 합니다:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">휴가 신청서</a></li>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-employee.pdf?rev=06526780c3254a95aa1bffa80c00e122&hash=35DB39B498C882BDF7C052DEB7DF60CF" target="_blank">직원의 심각한 건강 상태에 대한 의료 증명서</a></li>
        </ul>`,
    familyTrackTitle: "FMLA 가족 구성원용",
    familyQuestion1: "가족 구성원이 심각한 건강 상태를 가지고 있습니까?",
    familyQuestion2: "지난 7년 동안 King County에서 12개월 이상 근무한 적이 있습니까?",
    familyQuestion3: "지난 12개월 동안 1,250시간 이상 근무한 적이 있습니까?",
    familyEligibleMessage: `가족 구성원을 돌보기 위한 FMLA 휴가 자격이 있을 수 있습니다. 신청하려면 <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a>에 문의하십시오. 완료된 다음 문서를 제출해야 합니다:
              <ul>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">휴가 신청서</a></li>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-family-member.pdf?rev=cc9c1585eece442eb338d5c3b0f0b98c&hash=90F4BD3D843ED08CE6CDE480A25386F5" target="_blank">가족 구성원의 심각한 건강 상태에 대한 의료 증명서</a></li>
              </ul>`,
    newbornTrackTitle: "FMLA 신생아용",
    newbornQuestion1: "신생아의 친부모, 양부모 또는 위탁부모입니까?",
    newbornQuestion2: "지난 7년 동안 King County에서 12개월 이상 근무한 적이 있습니까?",
    newbornQuestion3: "지난 12개월 동안 1,250시간 이상 근무한 적이 있습니까?",
    newbornEligibleMessage: `신생아를 돌보기 위한 FMLA 휴가 자격이 있을 수 있습니다. 신청하려면 <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a>에 문의하십시오. 완료된 다음 문서를 제출해야 합니다:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">휴가 신청서</a></li>
            <li>출생 증명서 (출생 직후 가능하면 병원에서 제공)</li>
        </ul>`,
    newbornAdditionalQuestion: "출생 예정일이 King County에서 6개월 이상의 적극적인 근무 중에 발생할 것으로 예상됩니까?",
    newbornPPLMessage: `현재 FMLA 자격이 없지만 보충 유급 부모 휴가(PPL) 자격이 있을 수 있습니다. 추가 정보를 보려면 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">이 페이지</a>를 방문하십시오.`,
    newbornNoPPLMessage: `<p>현재 보충 유급 부모 휴가(PPL) 자격이 없습니다. 추가 정보를 보려면 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">이 페이지</a>를 방문하십시오.</p>
        <p>또한, FMLA/KCFML 또는 PPL 자격이 없을 수 있지만 워싱턴주 PFML 자격이 있을 수 있습니다. 
        추가 정보를 보려면 <a href="https://paidleave.wa.gov/get-ready-to-apply/" target="_blank">워싱턴주 PFML 웹사이트</a>를 방문하십시오.</p>`,
    notEligibleMessage: "현재 FMLA 자격이 없습니다. 추가 지원이 필요하면 HR에 문의하십시오."
  },
  am: {
    title: "የFMLA ፈቃድ ውሳኔ ዛፍ",
    selfBtn: "FMLA ለራስህ",
    familyBtn: "FMLA ለአንድ የቤተሰብ አባላት",
    newbornBtn: "FMLA ለሕፃን ልጅ",
    selfTrackTitle: "FMLA ለራስህ",
    selfQuestion1: "በኪንግ ካውንቲ በባለፉት 7 ዓመታት ውስጥ ቢያንስ 12 ወር ተቀጥረህ አስተማማህ ነበር?",
    selfQuestion2: "በባለፉት 12 ወሮች ውስጥ ቢያንስ 1,250 ሰዓት አገልግለህ ነበር?",
    selfEligibleMessage: `ለራስህ ለFMLA ፍቃድ ሊቀበሉ ይችላል። ለመግባት <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a>ን ያነጋግሩ። በዚህም ጊዜ የሚያስፈልጉትን የተከታታይ ሰነዶች እንዲገቡ ያስታውሱ:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">ቅድሚያ ቅጽ</a></li>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-employee.pdf?rev=06526780c3254a95aa1bffa80c00e122&hash=35DB39B498C882BDF7C052DEB7DF60CF" target="_blank">የሰራተኛው አስከፊ ጤና ምርጫ መረጃ</a></li>
        </ul>`,
    familyTrackTitle: "FMLA ለአንድ የቤተሰብ አባላት",
    familyQuestion1: "የቤተሰብ አባላትዎ አስከፊ የጤና ሁኔታ አለበት?",
    familyQuestion2: "በኪንግ ካውንቲ በባለፉት 7 ዓመታት ውስጥ ቢያንስ 12 ወር ተቀጥረህ አስተማማህ ነበር?",
    familyQuestion3: "በባለፉት 12 ወሮች ውስጥ ቢያንስ 1,250 ሰዓት አገልግለህ ነበር?",
    familyEligibleMessage: `የቤተሰብ አባላትዎን ለማከማቸት ለFMLA ፍቃድ ሊቀበሉ ይችላል። ለመግባት <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a>ን ያነጋግሩ። በዚህም ጊዜ የሚያስፈልጉትን የተከታታይ ሰነዶች እንዲገቡ ያስታውሱ:
              <ul>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">ቅድሚያ ቅጽ</a></li>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-family-member.pdf?rev=cc9c1585eece442eb338d5c3b0f0b98c&hash=90F4BD3D843ED08CE6CDE480A25386F5" target="_blank">የቤተሰብ አባላት አስከፊ ጤና ምርጫ መረጃ</a></li>
              </ul>`,
    newbornTrackTitle: "FMLA ለሕፃን ልጅ",
    newbornQuestion1: "ሕፃኑ የእርስዎ ተፈጥሯዊ, የማይታወቅ ወይም እርግብ እንደሆነ እንደ አባት/እናት ታስተማማሉ?",
    newbornQuestion2: "በኪንግ ካውንቲ በባለፉት 7 ዓመታት ውስጥ ቢያንስ 12 ወር ተቀጥረህ አስተማማህ ነበር?",
    newbornQuestion3: "በባለፉት 12 ወሮች ውስጥ ቢያንስ 1,250 ሰዓት አገልግለህ ነበር?",
    newbornEligibleMessage: `ሕፃኑን ለማከማቸት ለFMLA ፍቃድ ሊቀበሉ ይችላል። ለመግባት <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a>ን ያነጋግሩ። በዚህም ጊዜ የሚያስፈልጉትን የተከታታይ ሰነዶች እንዲገቡ ያስታውሱ:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">ቅድሚያ ቅጽ</a></li>
            <li>የተወለደ ሕፃን አስተማማኝ ማስረጃ ሰነድ (በተችለው ተጨማሪ ጊዜ በእውነት ከተወለደ በኋላ የተቀረበ)</li>
        </ul>`,
    newbornAdditionalQuestion: "የሕፃኑ ቀን በኪንግ ካውንቲ የተነሳ ስራ በማንኛውም አቅም ላይ ወደዚህ ይተከል?",
    newbornPPLMessage: `በአሁኑ ጊዜ ለFMLA ምክንያት አልተገኘም፣ ነገር ግን ለተጨማሪ የተከፈለ የወልድ ፍቃድ (PPL) ሊገኝ ይችላል። በዚህ ጊዜ 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">ይህን ገጽ</a> ጎብኙ ለተጨማሪ መረጃ እና አካሄድ እንደሆነ ማግኘት ይችላሉ።`,
    newbornNoPPLMessage: `<p>በአሁኑ ጊዜ ለተጨማሪ የተከፈለ የወልድ ፍቃድ (PPL) ሊገኝ አይችልም። በዚህ ጊዜ 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">ይህን ገጽ</a> ጎብኙ ለተጨማሪ መረጃ እና አካሄድ እንደሆነ ማግኘት ይችላሉ።</p>
        <p>በተጨማሪ የFMLA/KCFML ወይም PPL ሊገኝ አይችልም፣ ሆኖም ለዌስተርን ስቴት PFML ሊገኝ ይችላል። 
        ከሚገኙበት ወቅት በተጨማሪ መረጃ ይህን ገጽ <a href="https://paidleave.wa.gov/get-ready-to-apply/" target="_blank">ይጎብኙ ለተጨማሪ መረጃ</a>.</p>`,
    notEligibleMessage: "በአሁኑ ጊዜ ለFMLA ምክንያት አልተገኘም። ከተጨማሪ እርዳታ የሚፈልጉ ከሆነ HRን ያነጋግሩ።"
  },
  ar: {
    title: "شجرة قرارات إجازة FMLA",
    selfBtn: "FMLA لنفسك",
    familyBtn: "FMLA لأحد أفراد الأسرة",
    newbornBtn: "FMLA لمولود جديد",
    selfTrackTitle: "FMLA لنفسك",
    selfQuestion1: "هل كنت موظفاً في مقاطعة كينغ لمدة لا تقل عن 12 شهراً خلال السنوات السبع الماضية؟",
    selfQuestion2: "هل عملت لمدة لا تقل عن 1,250 ساعة خلال الـ 12 شهراً الماضية؟",
    selfEligibleMessage: `قد تكون مؤهلاً للحصول على إجازة FMLA لنفسك. اتصل بـ <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> للتقديم. تأكد من تقديم المستندات التالية المكتملة:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">نموذج طلب الإجازة</a></li>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-employee.pdf?rev=06526780c3254a95aa1bffa80c00e122&hash=35DB39B498C882BDF7C052DEB7DF60CF" target="_blank">شهادة طبية لحالة صحية خطيرة للموظف</a></li>
        </ul>`,
    familyTrackTitle: "FMLA لأحد أفراد الأسرة",
    familyQuestion1: "هل يعاني أحد أفراد أسرتك من حالة صحية خطيرة؟",
    familyQuestion2: "هل كنت موظفاً في مقاطعة كينغ لمدة لا تقل عن 12 شهراً خلال السنوات السبع الماضية؟",
    familyQuestion3: "هل عملت لمدة لا تقل عن 1,250 ساعة خلال الـ 12 شهراً الماضية؟",
    familyEligibleMessage: `قد تكون مؤهلاً للحصول على إجازة FMLA لرعاية أحد أفراد الأسرة. اتصل بـ <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> للتقديم. تأكد من تقديم المستندات التالية المكتملة:
              <ul>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">نموذج طلب الإجازة</a></li>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-family-member.pdf?rev=cc9c1585eece442eb338d5c3b0f0b98c&hash=90F4BD3D843ED08CE6CDE480A25386F5" target="_blank">شهادة طبية لحالة صحية خطيرة لأحد أفراد الأسرة</a></li>
              </ul>`,
    newbornTrackTitle: "FMLA لمولود جديد",
    newbornQuestion1: "هل أنت الوالد البيولوجي أو المتبني أو الحاضن للمولود الجديد؟",
    newbornQuestion2: "هل كنت موظفاً في مقاطعة كينغ لمدة لا تقل عن 12 شهراً خلال السنوات السبع الماضية؟",
    newbornQuestion3: "هل عملت لمدة لا تقل عن 1,250 ساعة خلال الـ 12 شهراً الماضية؟",
    newbornEligibleMessage: `قد تكون مؤهلاً للحصول على إجازة FMLA لرعاية مولود جديد. اتصل بـ <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a> للتقديم. تأكد من تقديم المستندات التالية المكتملة:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">نموذج طلب الإجازة</a></li>
            <li>وثيقة إثبات الولادة الحية (في أسرع وقت ممكن بعد الولادة - تقدمها المستشفى)</li>
        </ul>`,
    newbornAdditionalQuestion: "هل من المتوقع أن يحدث تاريخ الولادة بعد 6 أشهر أو أكثر من العمل النشط في مقاطعة كينغ؟",
    newbornPPLMessage: `لا يمكنك التأهل للحصول على FMLA في هذا الوقت، ولكن قد تكون مؤهلاً للحصول على إجازة الأبوين المدفوعة التكميلية (PPL). يرجى زيارة 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">هذه الصفحة</a> للحصول على مزيد من المعلومات حول الخطوات المحتملة التالية.`,
    newbornNoPPLMessage: `<p>لا يمكنك التأهل للحصول على إجازة الأبوين المدفوعة التكميلية (PPL) في هذا الوقت. يرجى زيارة 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">هذه الصفحة</a> للحصول على مزيد من المعلومات حول الخطوات المحتملة التالية.</p>
        <p>بالإضافة إلى ذلك، بينما قد لا تكون مؤهلاً للحصول على FMLA/KCFML أو PPL، قد تكون لا تزال مؤهلاً للحصول على إجازة الأمومة المدفوعة بولاية واشنطن. 
        قم بزيارة <a href="https://paidleave.wa.gov/get-ready-to-apply/" target="_blank">موقع إجازة الأمومة المدفوعة بولاية واشنطن</a> للحصول على مزيد من المعلومات.</p>`,
    notEligibleMessage: "أنت غير مؤهل للحصول على FMLA في هذا الوقت. يرجى الاتصال بـ HR للحصول على مزيد من المساعدة."
  },
  uk: {
    title: "Дерево рішень щодо відпустки FMLA",
    selfBtn: "FMLA для себе",
    familyBtn: "FMLA для члена сім'ї",
    newbornBtn: "FMLA для новонародженого",
    selfTrackTitle: "FMLA для себе",
    selfQuestion1: "Чи працювали ви в окрузі Кінг принаймні 12 місяців за останні 7 років?",
    selfQuestion2: "Чи працювали ви принаймні 1 250 годин протягом останніх 12 місяців?",
    selfEligibleMessage: `Ви можете мати право на відпустку FMLA для себе. Зв'яжіться з <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a>, щоб подати заявку. Переконайтеся, що ви подали наступні заповнені документи:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Форма запиту на відпустку</a></li>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-employee.pdf?rev=06526780c3254a95aa1bffa80c00e122&hash=35DB39B498C882BDF7C052DEB7DF60CF" target="_blank">Медична сертифікація щодо серйозного стану здоров'я співробітника</a></li>
        </ul>`,
    familyTrackTitle: "FMLA для члена сім'ї",
    familyQuestion1: "Чи має ваш родич серйозний стан здоров'я?",
    familyQuestion2: "Чи працювали ви в окрузі Кінг принаймні 12 місяців за останні 7 років?",
    familyQuestion3: "Чи працювали ви принаймні 1 250 годин протягом останніх 12 місяців?",
    familyEligibleMessage: `Ви можете мати право на відпустку FMLA для догляду за членом сім'ї. Зв'яжіться з <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a>, щоб подати заявку. Переконайтеся, що ви подали наступні заповнені документи:
              <ul>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Форма запиту на відпустку</a></li>
                  <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/fmla-med-cert-family-member.pdf?rev=cc9c1585eece442eb338d5c3b0f0b98c&hash=90F4BD3D843ED08CE6CDE480A25386F5" target="_blank">Медична сертифікація щодо серйозного стану здоров'я члена сім'ї</a></li>
              </ul>`,
    newbornTrackTitle: "FMLA для новонародженого",
    newbornQuestion1: "Чи є ви біологічним, усиновлювальним або опікувальним батьком новонародженого?",
    newbornQuestion2: "Чи працювали ви в окрузі Кінг принаймні 12 місяців за останні 7 років?",
    newbornQuestion3: "Чи працювали ви принаймні 1 250 годин протягом останніх 12 місяців?",
    newbornEligibleMessage: `Ви можете мати право на відпустку FMLA для догляду за новонародженим. Зв'яжіться з <a href="mailto:TransitFMLA@kingcounty.gov">TransitFMLA@kingcounty.gov</a>, щоб подати заявку. Переконайтеся, що ви подали наступні заповнені документи:
        <ul>
            <li><a href="https://cdn.kingcounty.gov/-/media/king-county/depts/dhr/documents/benefits/leaves/leave-request-form.pdf?rev=ade70f40eb39487ca78da42ee69e6f82&hash=4F4956AA7E967F0989066D15AEAB8318" target="_blank">Форма запиту на відпустку</a></li>
            <li>Документ, що підтверджує народження живої дитини (якнайшвидше після народження - надається лікарнею)</li>
        </ul>`,
    newbornAdditionalQuestion: "Чи очікується, що дата народження відбудеться через 6 або більше місяців активної роботи в окрузі Кінг?",
    newbornPPLMessage: `На даний момент ви не можете претендувати на FMLA, але можливо, маєте право на додаткову оплачувану батьківську відпустку (PPL). Будь ласка, відвідайте 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">цю сторінку</a> для отримання додаткової інформації про можливі наступні кроки.`,
    newbornNoPPLMessage: `<p>На даний момент ви не можете претендувати на додаткову оплачувану батьківську відпустку (PPL). Будь ласка, відвідайте 
        <a href="https://kingcounty.gov/en/legacy/audience/employees/benefits/leaves" target="_blank">цю сторінку</a> для отримання додаткової інформації про можливі наступні кроки.</p>
        <p>Крім того, хоча ви можете не мати права на FMLA/KCFML або PPL, ви все ще можете мати право на PFML штату Вашингтон. 
        Відвідайте <a href="https://paidleave.wa.gov/get-ready-to-apply/" target="_blank">веб-сайт PFML штату Вашингтон</a> для отримання додаткової інформації.</p>`,
    notEligibleMessage: "На даний момент ви не маєте права на FMLA. Будь ласка, зв'яжіться з HR для отримання додаткової допомоги."
  },
};

function changeLanguage() {
  const selectedLanguage = document.getElementById("language_selector").value;
  document.getElementById("title").innerText = translations[selectedLanguage].title;
  document.getElementById("selfBtn").innerText = translations[selectedLanguage].selfBtn;
  document.getElementById("familyBtn").innerText = translations[selectedLanguage].familyBtn;
  document.getElementById("newbornBtn").innerText = translations[selectedLanguage].newbornBtn;
}
