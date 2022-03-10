var navbar_left = document.getElementById('navbar_left');
var navbar_right = document.getElementById('navbar_right');
var navbar_cel = document.getElementById('navbar_cel');
var navbar_bottom_mobile = document.getElementById('navbar_bottom_mobile');
// menu lateral izquierdo
navbar_left.innerHTML = `<nav id="sidebar">
            <a class="navbar-brand" href="../dashboards/dashboard_entidad.php"><img src="../images/logo_horizontal_mobile.svg" width="80%" alt="" id="logosivespa"></a>
            <ul class="list-unstyled components">
            <li class="nav-item">
                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#fff;}</style></defs><title>home</title><path class="cls-1" d="M20.31,10.67a.79.79,0,0,1-.8.8H17.9v7.24a1.6,1.6,0,0,1-1.6,1.6H5.05a1.61,1.61,0,0,1-1.61-1.6V11.47H1.83a.79.79,0,0,1-.8-.8.78.78,0,0,1,.24-.57l9.12-9a.4.4,0,0,1,.56,0l9.12,9A.82.82,0,0,1,20.31,10.67Z"/></svg>
                <a href="../dashboards/dashboard_entidad.php" class="nav-link"><span class="sr-only">Inicio</span></a>
            </li>
    

                <li class="nav-item">
                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>report</title><path class="cls-1" d="M15.33,4.72h3.52L15.14,1.08V4.54A.18.18,0,0,0,15.33,4.72Z"/><path class="cls-1" d="M15.33,5.89A1.35,1.35,0,0,1,14,4.54V.74H4.31A2.17,2.17,0,0,0,2.14,2.91V18.42a2.17,2.17,0,0,0,2.17,2.17H17a2.17,2.17,0,0,0,2.17-2.17V5.89ZM14,15.78H6.51a.58.58,0,1,1,0-1.16H14a.58.58,0,0,1,0,1.16Zm-8.08-2.9a.58.58,0,0,1,.59-.58h6.68a.58.58,0,0,1,0,1.16H6.51A.58.58,0,0,1,5.92,12.88Zm8.78-1.75H6.51a.58.58,0,1,1,0-1.16H14.7a.58.58,0,1,1,0,1.16Z"/></svg>
                    <a class="nav-link" href="../reportes/dashboard_reportes.php">Reportes</a>
                </li>
                <li class="nav-item">   
                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>informe</title><path class="cls-1" d="M13.76,2.2H11.93V1.57A1.27,1.27,0,0,0,10.67.3,1.29,1.29,0,0,0,9.39,1.57V2.2H7.57V4.27h6.19Z"/><path class="cls-1" d="M15,2.71V5.48H6.35V2.71H3.68V21h14V2.71Zm-.52,14.58H6.87V16.07h7.59Zm0-2.68H6.87V13.4h7.59Zm0-2.67H6.87V10.73h7.59Zm0-2.67H6.87V8.05h7.59Z"/></svg>
                    <a class="nav-link" href="../informes/informes.php">Informes</a>
                </li>
                <li class="nav-item">
                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>estadistica</title><path class="cls-1" d="M10,2.86a8.47,8.47,0,1,0,8.46,8.47H10Z"/><path class="cls-1" d="M11.33,1.54V10h8.46A8.47,8.47,0,0,0,11.33,1.54Z"/></svg>
                    <a class="nav-link" href="../estadisticas/estadisticas.php">Estadisticas</a>
                </li>
                <li class="nav-item">
                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>control_usuarios</title><path class="cls-1" d="M15.55,18.12c-.46,1-.77.78-8.58.78a1.3,1.3,0,0,1-1.29-1.3c0-2.67-.39-4.86,1.64-6.49a4.3,4.3,0,0,1,1.75-.87,3.22,3.22,0,1,1,3.25,0,4.58,4.58,0,0,1,3.34,4.36C15.66,17.89,15.7,17.78,15.55,18.12Z"/><path class="cls-1" d="M20.14,12.59v4A1.13,1.13,0,0,1,19,17.71c-2.5,0-2.24.05-2.24-.11,0-3,.33-5-1.59-6.93a2.36,2.36,0,0,1,.76-.43,2,2,0,1,1,2.49,0A2.51,2.51,0,0,1,20.14,12.59Z"/><path class="cls-1" d="M6.17,10.67c-1.94,2-1.6,4.07-1.6,6.93,0,.16.31.11-2.28.11a1.08,1.08,0,0,1-1.08-1.08v-4a2.5,2.5,0,0,1,1.7-2.36,2,2,0,0,1-.78-1.6,2,2,0,1,1,3.28,1.61A2.36,2.36,0,0,1,6.17,10.67Z"/></svg>
                <a class="nav-link" href="../usuarios/entidades.php">Entidades</a>
                </li>
                <li class="nav-item">
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.15 17.15"><defs><style>.cls-1{fill:#fff;}</style></defs><title>content icon</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path class="cls-1" d="M17.15,11.05a.81.81,0,0,1-.39.48.68.68,0,0,1-1-.55V2.78a1.31,1.31,0,0,0-.76-1.29,1.52,1.52,0,0,0-.63-.14H2.72A1.33,1.33,0,0,0,1.34,2.72v11.7a1.35,1.35,0,0,0,1.42,1.39h8a.68.68,0,0,1,.71.42.67.67,0,0,1-.56.91H2.71A2.66,2.66,0,0,1,.16,15.34a2.79,2.79,0,0,1-.15-.9Q0,8.57,0,2.72A2.68,2.68,0,0,1,2.3,0s.05,0,.08,0H14.77l.07,0a2.59,2.59,0,0,1,2,1.51,5.88,5.88,0,0,1,.27.84Z"/><path class="cls-1" d="M17.15,15.37a2.5,2.5,0,0,1-.41,1,2,2,0,0,1-2.93.29c-.53-.5-1-1-1.55-1.55L10.13,13a1.22,1.22,0,0,1-.26-.44c-.25-.85-.48-1.7-.72-2.56a.66.66,0,0,1,.45-.88.86.86,0,0,1,.45,0l2.49.75a1.08,1.08,0,0,1,.41.25q1.8,1.78,3.58,3.59a2,2,0,0,1,.59,1.15s0,0,0,.06Zm-6.4-4.66c.12.42.22.82.34,1.21a.58.58,0,0,0,.15.25c.74.76,1.49,1.51,2.24,2.26l.09.08.95-1-2.41-2.39A.24.24,0,0,0,12,11.1Zm4.75,3.84-.94.95a.71.71,0,0,0,.72.29.64.64,0,0,0,.51-.51A.73.73,0,0,0,15.5,14.55Z"/><path class="cls-1" d="M8.57,4.45H4.1a.68.68,0,0,1-.69-.41A.66.66,0,0,1,4,3.12H13a.69.69,0,0,1,.72.45.67.67,0,0,1-.61.89H8.57Z"/><path class="cls-1" d="M8.56,7.13H4.09A.67.67,0,0,1,4,5.8h9.11a.68.68,0,0,1,.68.42.67.67,0,0,1-.57.92H8.56Z"/><path class="cls-1" d="M5.57,8.47H7A.67.67,0,1,1,7,9.81H4a.66.66,0,0,1-.29-1.27.82.82,0,0,1,.34-.06Z"/></g></g></svg>
                    <a class="nav-link" href="../contenido/contenidos.php">Contenidos</a>
                </li>
                <li class="nav-item">
                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#fff;}</style></defs><title>plan_de_accion</title><path class="cls-1" d="M19.28,4.49A8.16,8.16,0,0,0,19,3.65a2.61,2.61,0,0,0-2-1.51s-.05,0-.08,0h2.38Z"/><path class="cls-1" d="M18.78,1.2A11.94,11.94,0,0,0,17,1.37a5.52,5.52,0,0,0-1.55.42A7.07,7.07,0,0,0,14.06,3a27.82,27.82,0,0,0-2.37,3.05C10.75,7.44,9.91,8.77,9.21,10S8,12.37,7.31,13.68a6.78,6.78,0,0,0-1.4-1.35,3.2,3.2,0,0,0-1.75-.64,3.11,3.11,0,0,0-1.81.73,2.12,2.12,0,0,0-1,1.69,2.74,2.74,0,0,0,.89,1.67,21.47,21.47,0,0,1,2.09,2.63,11,11,0,0,0,.8,1.14,1.67,1.67,0,0,0,.68.44,4.07,4.07,0,0,0,1.31.14,4.05,4.05,0,0,0,1.8-.28,2.08,2.08,0,0,0,.81-.8c.17-.3.44-.92.83-1.87a45.52,45.52,0,0,1,3.88-7.44A29.72,29.72,0,0,1,19.1,3.83a5.26,5.26,0,0,0,.71-.75A1.32,1.32,0,0,0,20,2.39a1.14,1.14,0,0,0-.34-.84A1.21,1.21,0,0,0,18.78,1.2Z"/></svg>
                    <a class="nav-link" href="../planes/planes_de_accion.php">Planes de acción</a>
                </li>
                <li class="nav-item">
                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>news</title><path class="cls-1" d="M16.39,4.76l1.25-1.25a.59.59,0,0,0,0-.83.6.6,0,0,0-.83,0L15.57,3.93a.59.59,0,0,0,0,.83A.57.57,0,0,0,16.39,4.76Z"/><path class="cls-1" d="M19.1,7.51H17.85a.59.59,0,0,0,0,1.17H19.1a.59.59,0,1,0,0-1.17Z"/><path class="cls-1" d="M12.23,3.06a.59.59,0,0,0,.58-.59V1.22a.58.58,0,1,0-1.16,0V2.47A.59.59,0,0,0,12.23,3.06Z"/><path class="cls-1" d="M1.82,15.18a.59.59,0,0,0,0,.83l2.5,2.5a.59.59,0,0,0,.82,0l1-1L2.8,14.2Z"/><path class="cls-1" d="M11.92,15.65l-4.1,1.93,2.8,2.8a.59.59,0,0,0,.83,0l2.18-2.19a.57.57,0,0,0,0-.82Z"/><path class="cls-1" d="M9.52,2.68A.62.62,0,0,0,9,2.52a.59.59,0,0,0-.42.33l-5,10.53L7,16.7l10.53-4.95a.57.57,0,0,0,.32-.43.59.59,0,0,0-.16-.51Z"/></svg>
                    <a class="nav-link" href="../noticias/noticias.php">Noticias</a>
                </li>
                <li class="nav-item">
                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}.cls-2{fill:#fff;}</style></defs><title>tips</title><path class="cls-1" d="M13,18.32l.21,0v1.09a1.51,1.51,0,0,1-1.51,1.5H9.6a1.56,1.56,0,0,1-1.5-1.75V18.3l.19,0Z"/><path class="cls-1" d="M16.68,10.59a6,6,0,0,1-2.3,4.72,2.86,2.86,0,0,0-1.09,1.76A.69.69,0,0,0,13,17H8.29a.93.93,0,0,0-.24,0,2.71,2.71,0,0,0-1-1.67,6,6,0,1,1,9.62-4.8Z"/><path class="cls-1" d="M10.67,3.26A.65.65,0,0,1,10,2.62V.94a.65.65,0,0,1,1.29,0V2.62A.64.64,0,0,1,10.67,3.26Z"/><path class="cls-1" d="M16.31,5.6a.63.63,0,0,1-.46-.19.65.65,0,0,1,0-.91L17,3.31a.64.64,0,0,1,.91.91L16.76,5.41A.61.61,0,0,1,16.31,5.6Z"/><path class="cls-1" d="M20.32,11.24H18.64a.65.65,0,0,1,0-1.29h1.68a.65.65,0,1,1,0,1.29Z"/><path class="cls-1" d="M17.49,18.07a.65.65,0,0,1-.45-.19l-1.19-1.19a.64.64,0,1,1,.91-.91L18,17a.65.65,0,0,1,0,.91A.68.68,0,0,1,17.49,18.07Z"/><path class="cls-1" d="M3.84,18.07a.68.68,0,0,1-.46-.19.65.65,0,0,1,0-.91l1.19-1.19a.64.64,0,1,1,.91.91L4.3,17.88A.7.7,0,0,1,3.84,18.07Z"/><path class="cls-1" d="M2.69,11.24H1A.65.65,0,0,1,1,10H2.69a.65.65,0,0,1,0,1.29Z"/><path class="cls-1" d="M5,5.6a.63.63,0,0,1-.46-.19L3.38,4.22a.65.65,0,0,1,0-.91.66.66,0,0,1,.92,0L5.48,4.5a.65.65,0,0,1,0,.91A.61.61,0,0,1,5,5.6Z"/><path class="cls-2" d="M13.89,11a.64.64,0,0,1-.65-.64A2.36,2.36,0,0,0,10.88,8a.65.65,0,0,1,0-1.29,3.66,3.66,0,0,1,3.65,3.65A.64.64,0,0,1,13.89,11Z"/></svg>
                    <a class="nav-link" href="../tips/tips.php">Tips</a>
                </li>
                <li class="nav-item">
                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#fff;}</style></defs><title>save copia 2</title><path class="cls-1" d="M10.67,18.78h.72a1.15,1.15,0,0,0,0-2.3c-.49,0-1,0-1.49,0a1.15,1.15,0,0,0,0,2.3Zm-2.5-1.47a3.33,3.33,0,0,1-3.65-2.63H3.9a3.89,3.89,0,0,0,4.27,3.25Z"/><path class="cls-1" d="M1.46,9.68c0-.12.05-.25.09-.37A2.5,2.5,0,0,1,3.92,7.46h.21a6.52,6.52,0,0,1,2.73-4.8,6.26,6.26,0,0,1,3.82-1.22A6.35,6.35,0,0,1,15.1,3.18a6.4,6.4,0,0,1,2.09,4.25c.25,0,.49,0,.71.09a2.49,2.49,0,0,1,2,2.38,16.53,16.53,0,0,1,0,2A2.43,2.43,0,0,1,17.55,14c-.29,0-.59,0-.88,0a.56.56,0,0,1-.61-.62V8a5.15,5.15,0,0,0-1.19-3.42A5.16,5.16,0,0,0,9.3,2.78a5.18,5.18,0,0,0-4,4.33,5.22,5.22,0,0,0-.07,1v5.24c0,.44-.14.63-.57.68a2.69,2.69,0,0,1-3-1.54,5,5,0,0,1-.2-.66Z"/><path class="cls-1" d="M10.67,18.78H10a1.15,1.15,0,0,1,0-2.3c.5,0,1,0,1.49,0a1.15,1.15,0,0,1,0,2.3Z"/><path class="cls-1" d="M8.17,17.31v.62A3.89,3.89,0,0,1,3.9,14.68h.62A3.33,3.33,0,0,0,8.17,17.31Z"/></svg>
                    <a class="nav-link" href="../soporte/canales.php">Soporte Técnico</a>
                </li><li class="nav-item">
                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>contact</title><g id="_Grupo_" data-name="&lt;Grupo&gt;"><path id="_Trazado_" data-name="&lt;Trazado&gt;" class="cls-1" d="M17.42,9.14a5.75,5.75,0,0,0-5.09-5.48l-.18,0a3,3,0,0,0-.43,0,.71.71,0,0,0-.77.65.74.74,0,0,0,.11.59,1.12,1.12,0,0,0,.8.34l.22,0c2.54.56,3.39,1.46,3.81,4a1.27,1.27,0,0,1,0,.22c0,.3.06.92.73.92h.18c.63-.1.61-.67.6-.94a1.31,1.31,0,0,1,0-.2Z"/><path id="_Trazado_2" data-name="&lt;Trazado&gt;" class="cls-1" d="M11.56,2.68l.2,0c4.18.64,6.1,2.62,6.63,6.82a1.93,1.93,0,0,1,0,.25c0,.33,0,1,.75,1h0a.72.72,0,0,0,.55-.21,1.15,1.15,0,0,0,.2-.88,1.28,1.28,0,0,1,0-.19,8.51,8.51,0,0,0-8-8.35h-.47a.75.75,0,0,0-.83.78C10.6,2.61,11.25,2.65,11.56,2.68Z"/><path id="_Trazado_3" data-name="&lt;Trazado&gt;" class="cls-1" d="M18.19,15l-.27-.21c-.46-.36-.94-.7-1.41-1l-.29-.2a2.93,2.93,0,0,0-1.65-.63A2.13,2.13,0,0,0,12.79,14a1,1,0,0,1-.81.49,1.59,1.59,0,0,1-.66-.16,7.86,7.86,0,0,1-4.11-4,1.31,1.31,0,0,1,.41-1.88,1.91,1.91,0,0,0,1-1.67c-.06-1-2.38-4.21-3.36-4.57A1.9,1.9,0,0,0,4,2.22,3.75,3.75,0,0,0,1.69,4.14,3.55,3.55,0,0,0,1.74,7a23.21,23.21,0,0,0,5.09,7.75,24.62,24.62,0,0,0,7.73,5.13,4.22,4.22,0,0,0,.76.23l.18,0h.1a4.39,4.39,0,0,0,3.64-2.77C19.69,16.11,18.86,15.47,18.19,15Z"/><path id="_Trazado_4" data-name="&lt;Trazado&gt;" class="cls-1" d="M12.18,6.09a.88.88,0,0,0-.92.54.73.73,0,0,0,0,.62,1,1,0,0,0,.7.37,1.64,1.64,0,0,1,1.53,1.65.79.79,0,0,0,.75.77h.09c.47-.06.7-.41.68-1a3,3,0,0,0-.92-2A2.76,2.76,0,0,0,12.18,6.09Z"/></g></svg>
                <a class="nav-link" href="../lineas/mis_lineas.php">Mis lineas de atención</a>
            </li>
                <li class="nav-item">
                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#fff;}</style></defs><title>config</title><path class="cls-1" d="M13.14,11.51a6.54,6.54,0,0,0,.62-1.46l-.95-.72c0-.17.06-.34.08-.51s0-.12,0-.18L14,8.21a6.75,6.75,0,0,0-.19-1.57l-1.18-.15a5.24,5.24,0,0,0-.27-.65l.75-.93a6.13,6.13,0,0,0-1-1.26l-1.09.46a6,6,0,0,0-.56-.44l.19-1.17a6.54,6.54,0,0,0-1.46-.62l-.72,1A4.54,4.54,0,0,0,8,2.74H7.85L7.42,1.62a6.25,6.25,0,0,0-1.57.19L5.7,3a5.18,5.18,0,0,0-.65.26L4.12,2.5a6.94,6.94,0,0,0-1.26,1l.46,1.1a5.89,5.89,0,0,0-.44.55L1.71,4.92a6.67,6.67,0,0,0-.62,1.45l1,.72A4.34,4.34,0,0,0,2,7.61c0,.06,0,.12,0,.18L.83,8.22A6.37,6.37,0,0,0,1,9.79l1.18.14a4.77,4.77,0,0,0,.26.66l-.75.92a7,7,0,0,0,1,1.27l1.1-.46a5.79,5.79,0,0,0,.55.43l-.18,1.18a6.67,6.67,0,0,0,1.45.62l.72-1,.52.08.18,0,.42,1.11A6.9,6.9,0,0,0,9,14.62l.14-1.18a4.8,4.8,0,0,0,.66-.27l.92.75A6.19,6.19,0,0,0,12,13l-.46-1.09a5.93,5.93,0,0,0,.43-.56ZM6.66,12a3.88,3.88,0,1,1,4.56-3A3.89,3.89,0,0,1,6.66,12Z"/><path class="cls-1" d="M3.89,7.51A3.6,3.6,0,1,0,8.13,4.68,3.6,3.6,0,0,0,3.89,7.51Zm6.24,1a2.72,2.72,0,1,1-2.41-3A2.74,2.74,0,0,1,10.13,8.51Z"/><path class="cls-1" d="M13.14,14.63a3.09,3.09,0,1,0,3.68-2.35A3.09,3.09,0,0,0,13.14,14.63Zm4.81,0a1.88,1.88,0,1,1-2.44-1.15A1.89,1.89,0,0,1,18,14.63Z"/><path class="cls-1" d="M20.92,16.75a4.81,4.81,0,0,0,.2-1.07l-.78-.36a5.31,5.31,0,0,0-.05-.68l.72-.47a4.44,4.44,0,0,0-.15-.52,4.4,4.4,0,0,0-.21-.5l-.86.08a3.72,3.72,0,0,0-.39-.56l.39-.78a5,5,0,0,0-.82-.7l-.7.5a5,5,0,0,0-.62-.3l0-.86a5.36,5.36,0,0,0-1.06-.2l-.36.78a3.91,3.91,0,0,0-.68.06L15,10.45a5.26,5.26,0,0,0-.53.15l-.5.2.08.86a5.58,5.58,0,0,0-.56.39l-.77-.39a5,5,0,0,0-.71.82l.5.71a4.27,4.27,0,0,0-.29.61l-.86,0a4.23,4.23,0,0,0-.2,1.06l.78.36A5.19,5.19,0,0,0,12,16l-.72.48a5.08,5.08,0,0,0,.15.52,4.4,4.4,0,0,0,.21.5l.86-.08a3.67,3.67,0,0,0,.38.56l-.38.77a5,5,0,0,0,.82.71l.7-.5a4.85,4.85,0,0,0,.61.29l.06.87a5.36,5.36,0,0,0,1.06.2l.36-.79a5.31,5.31,0,0,0,.68-.05l.47.72A4.44,4.44,0,0,0,17.8,20a3.75,3.75,0,0,0,.5-.21l-.08-.86a4.35,4.35,0,0,0,.57-.38l.77.39a5.42,5.42,0,0,0,.7-.82l-.5-.71a3.83,3.83,0,0,0,.3-.61Zm-5.46,1.69A3.22,3.22,0,1,1,19.3,16,3.22,3.22,0,0,1,15.46,18.44Z"/><path class="cls-1" d="M13,14.6a3.22,3.22,0,1,0,3.84-2.45A3.22,3.22,0,0,0,13,14.6ZM19.17,16a3.09,3.09,0,1,1-2.35-3.68A3.09,3.09,0,0,1,19.17,16Z"/></svg>
                    <a class="nav-link" href="../configuracion/configuracion.php">Configuración</a>
                </li>
             
                <li class="nav-item">
                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>logout</title><path class="cls-1" d="M13.08,11.47a.8.8,0,0,0-.8.81V15.5a.81.81,0,0,1-.81.81H9.06V4.22A1.62,1.62,0,0,0,8,2.69l-.24-.08h3.75a.81.81,0,0,1,.81.81V5.83a.81.81,0,1,0,1.61,0V3.42A2.42,2.42,0,0,0,11.47,1H2.81L2.73,1,2.61,1A1.61,1.61,0,0,0,1,2.61v14.5a1.62,1.62,0,0,0,1.1,1.53l4.84,1.62a1.73,1.73,0,0,0,.5.07,1.62,1.62,0,0,0,1.62-1.61v-.8h2.41a2.43,2.43,0,0,0,2.42-2.42V12.28A.81.81,0,0,0,13.08,11.47Z"/><path class="cls-1" d="M20.1,8.49,16.88,5.26a.81.81,0,0,0-1.38.57V8.25H12.28a.81.81,0,1,0,0,1.61H15.5v2.42a.81.81,0,0,0,1.38.57L20.1,9.62A.8.8,0,0,0,20.1,8.49Z"/></svg>
                    <a class="nav-link" href="../seguridad/logout.php">Cerrar Sesión</a>
                </li>
                </ul>
            <div class="logo_gober">
                <img src="../images/logo_seccional_salud.png" width="200" alt="" id="logoseccional">
            </div>
                    </nav>`;

// menu lateral derecho

navbar_right.innerHTML = ` <nav class="sidebar-right">

<button id="dark-mode-toggle" class="dark-mode-toggle">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.166 512.166" style="enable-background:new 0 0 512.166 512.166;" xml:space="preserve" fill="#121212">
<g>
	<g>
		<path d="M503.536,289.135c-6.827-5.227-16.384-5.653-23.829-1.408c-2.219,1.259-4.416,2.539-6.699,3.712    c-50.709,26.624-108.437,31.403-162.517,13.419c-56.469-18.773-102.187-59.755-128.768-115.371    c-24.128-50.432-29.653-108.245-15.552-162.752c2.176-8.32-0.875-17.109-7.701-22.315c-6.805-5.205-16.085-5.803-23.573-1.536    C12.186,73.305-34.939,230.937,27.589,361.753c31.659,66.176,86.293,114.987,153.856,137.451    c25.963,8.619,52.629,12.907,79.168,12.907c40.064,0,79.851-9.749,116.608-29.013c66.027-34.624,114.965-97.259,134.293-171.84    C513.669,302.959,510.341,294.34,503.536,289.135z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

</button>
                <ul>
                    <li>
                        <h4>Avisos legales</h4>
                    </li>
                    <li><a href="../legales/politicas.php">Política de privacidad y uso de datos</a></li>
                    <li>
                        <h4>Soporte técnico</h4>
                    </li>
                    <li><a href="../soporte/canales.php">Canales de soporte técnico</a></li>
                    <li><a href="../soporte/documentacion.php">Documentación y tutoriales</a></li>
                    <li><a href="../soporte/ayuda.php">Ayuda</a></li>
                    
                    <li>
                        <h4>Información</h4>
                    </li>
                    <li><a href="../sivespa/informacion.php">¿Qué es el SIVESPA?</a></li>
                    <li><a href="https://escuelacontraladrogadiccion.gov.co/sobre-nosotros/">Escuela Contra la Drogadicción</a></li>
                    <li><a href="https://sivespa.gov.co">Sitio web SIVESPA</a></li>
                    <li><a href="../sivespa/descargas.php">Descargar aplicaciones</a></li>
                </ul>
                <ul>
                <li> <span class="version actualizada">
                Version: Beta del sistema 1.1
                Actualizado
                </span></li>
                <li><span class="warning version">
                Actualmente hay una nueva version.
                <a href="../sivespa/descargas.php">Actualizar</a></span></li>
                <li> <span class="mantenimiento version">
                El sistema se encuentra en mantenimiento
                </span></li>
                </ul>
               
          
                <div class="logo_gober">
                          
               
                    <img src="../images/logo_escuela.png" width="100%" alt="">
                </div>
            </nav>`;
// menu celular superior
navbar_cel.innerHTML = ` <nav class="navbar navbar-expand-lg navbar-dark bg_mobile_navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="../dashboards/dashboard_entidad.php"><img src="../images/logo_horizontal_mobile.svg" width="300px" alt=""></a>
                    <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="list-unstyled components">
                            <li class="nav-item active">
                                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>home</title><path class="cls-1" d="M20.31,10.67a.79.79,0,0,1-.8.8H17.9v7.24a1.6,1.6,0,0,1-1.6,1.6H5.05a1.61,1.61,0,0,1-1.61-1.6V11.47H1.83a.79.79,0,0,1-.8-.8.78.78,0,0,1,.24-.57l9.12-9a.4.4,0,0,1,.56,0l9.12,9A.82.82,0,0,1,20.31,10.67Z"/></svg>
                            <a href="../dashboards/dashboard_entidad.php" class="nav-link"><span class="sr-only">Inicio</span></a>
                    
                            </li>
                            <li class="nav-item">
                                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>report</title><path class="cls-1" d="M15.33,4.72h3.52L15.14,1.08V4.54A.18.18,0,0,0,15.33,4.72Z"/><path class="cls-1" d="M15.33,5.89A1.35,1.35,0,0,1,14,4.54V.74H4.31A2.17,2.17,0,0,0,2.14,2.91V18.42a2.17,2.17,0,0,0,2.17,2.17H17a2.17,2.17,0,0,0,2.17-2.17V5.89ZM14,15.78H6.51a.58.58,0,1,1,0-1.16H14a.58.58,0,0,1,0,1.16Zm-8.08-2.9a.58.58,0,0,1,.59-.58h6.68a.58.58,0,0,1,0,1.16H6.51A.58.58,0,0,1,5.92,12.88Zm8.78-1.75H6.51a.58.58,0,1,1,0-1.16H14.7a.58.58,0,1,1,0,1.16Z"/></svg>
                            <a class="nav-link" href="../reportes/dashboard_reportes.php">Reportes</a>
                            </li>
                            <li class="nav-item">
                                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>informe</title><path class="cls-1" d="M13.76,2.2H11.93V1.57A1.27,1.27,0,0,0,10.67.3,1.29,1.29,0,0,0,9.39,1.57V2.2H7.57V4.27h6.19Z"/><path class="cls-1" d="M15,2.71V5.48H6.35V2.71H3.68V21h14V2.71Zm-.52,14.58H6.87V16.07h7.59Zm0-2.68H6.87V13.4h7.59Zm0-2.67H6.87V10.73h7.59Zm0-2.67H6.87V8.05h7.59Z"/></svg>
                            <a class="nav-link" href="../informes/informes.php">Informes</a>
                            </li>
                            <li class="nav-item">
                                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>estadistica</title><path class="cls-1" d="M10,2.86a8.47,8.47,0,1,0,8.46,8.47H10Z"/><path class="cls-1" d="M11.33,1.54V10h8.46A8.47,8.47,0,0,0,11.33,1.54Z"/></svg>
                            <a class="nav-link" href="../estadisticas/estadisticas.php">Estadísticas</a>
                            </li>
                            <li class="nav-item">
                                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>control_usuarios</title><path class="cls-1" d="M15.55,18.12c-.46,1-.77.78-8.58.78a1.3,1.3,0,0,1-1.29-1.3c0-2.67-.39-4.86,1.64-6.49a4.3,4.3,0,0,1,1.75-.87,3.22,3.22,0,1,1,3.25,0,4.58,4.58,0,0,1,3.34,4.36C15.66,17.89,15.7,17.78,15.55,18.12Z"/><path class="cls-1" d="M20.14,12.59v4A1.13,1.13,0,0,1,19,17.71c-2.5,0-2.24.05-2.24-.11,0-3,.33-5-1.59-6.93a2.36,2.36,0,0,1,.76-.43,2,2,0,1,1,2.49,0A2.51,2.51,0,0,1,20.14,12.59Z"/><path class="cls-1" d="M6.17,10.67c-1.94,2-1.6,4.07-1.6,6.93,0,.16.31.11-2.28.11a1.08,1.08,0,0,1-1.08-1.08v-4a2.5,2.5,0,0,1,1.7-2.36,2,2,0,0,1-.78-1.6,2,2,0,1,1,3.28,1.61A2.36,2.36,0,0,1,6.17,10.67Z"/></svg>
                            <a class="nav-link" href="../usuarios/entidades.php">Entidades</a>
                            </li>
                            <li class="nav-item">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#183059;}</style></defs><title>info</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><circle class="cls-1" cx="350" cy="350" r="350"/><rect class="cls-2" x="307" y="222" width="80" height="360" rx="22.5" ry="22.5"/><circle class="cls-2" cx="347" cy="140" r="51"/></g></g></svg>
                            <a class="nav-link" href="../sivespa/informacion.php">Información</a>
                            </li>
                            <li class="nav-item">
                                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>news</title><path class="cls-1" d="M16.39,4.76l1.25-1.25a.59.59,0,0,0,0-.83.6.6,0,0,0-.83,0L15.57,3.93a.59.59,0,0,0,0,.83A.57.57,0,0,0,16.39,4.76Z"/><path class="cls-1" d="M19.1,7.51H17.85a.59.59,0,0,0,0,1.17H19.1a.59.59,0,1,0,0-1.17Z"/><path class="cls-1" d="M12.23,3.06a.59.59,0,0,0,.58-.59V1.22a.58.58,0,1,0-1.16,0V2.47A.59.59,0,0,0,12.23,3.06Z"/><path class="cls-1" d="M1.82,15.18a.59.59,0,0,0,0,.83l2.5,2.5a.59.59,0,0,0,.82,0l1-1L2.8,14.2Z"/><path class="cls-1" d="M11.92,15.65l-4.1,1.93,2.8,2.8a.59.59,0,0,0,.83,0l2.18-2.19a.57.57,0,0,0,0-.82Z"/><path class="cls-1" d="M9.52,2.68A.62.62,0,0,0,9,2.52a.59.59,0,0,0-.42.33l-5,10.53L7,16.7l10.53-4.95a.57.57,0,0,0,.32-.43.59.59,0,0,0-.16-.51Z"/></svg>
                                <a class="nav-link" href="../noticias/noticias.php">Noticias</a>
                            </li>
                            <li class="nav-item">
                                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>tips</title><path class="cls-1" d="M12.6,18.32H8.74a.65.65,0,1,1,0-1.29H12.6a.65.65,0,0,1,0,1.29Z"/><path class="cls-1" d="M10.67,3.26A.65.65,0,0,1,10,2.62V.94a.65.65,0,0,1,1.29,0V2.62A.64.64,0,0,1,10.67,3.26Z"/><path class="cls-1" d="M16.31,5.6a.63.63,0,0,1-.46-.19.65.65,0,0,1,0-.91L17,3.31a.64.64,0,0,1,.91.91L16.76,5.41A.61.61,0,0,1,16.31,5.6Z"/><path class="cls-1" d="M20.32,11.24H18.64a.65.65,0,0,1,0-1.29h1.68a.65.65,0,1,1,0,1.29Z"/><path class="cls-1" d="M17.49,18.07a.65.65,0,0,1-.45-.19l-1.19-1.19a.64.64,0,1,1,.91-.91L18,17a.65.65,0,0,1,0,.91A.68.68,0,0,1,17.49,18.07Z"/><path class="cls-1" d="M3.84,18.07a.68.68,0,0,1-.46-.19.65.65,0,0,1,0-.91l1.19-1.19a.64.64,0,1,1,.91.91L4.3,17.88A.7.7,0,0,1,3.84,18.07Z"/><path class="cls-1" d="M2.69,11.24H1A.65.65,0,0,1,1,10H2.69a.65.65,0,0,1,0,1.29Z"/><path class="cls-1" d="M5,5.6a.63.63,0,0,1-.46-.19L3.38,4.22a.65.65,0,0,1,0-.91.66.66,0,0,1,.92,0L5.48,4.5a.65.65,0,0,1,0,.91A.61.61,0,0,1,5,5.6Z"/><path class="cls-1" d="M13.89,11a.64.64,0,0,1-.65-.64A2.36,2.36,0,0,0,10.88,8a.65.65,0,0,1,0-1.29,3.66,3.66,0,0,1,3.65,3.65A.64.64,0,0,1,13.89,11Z"/><path class="cls-1" d="M11.74,20.89H9.59a1.56,1.56,0,0,1-1.5-1.75V17.63a2.78,2.78,0,0,0-1-2.24,6,6,0,1,1,7.33-.08,2.81,2.81,0,0,0-1.14,2.17v1.91a1.5,1.5,0,0,1-1.5,1.5Zm-1.09-15a5,5,0,0,0-1,.1,4.72,4.72,0,0,0-1.81,8.38,4.08,4.08,0,0,1,1.55,3.27v1.51c0,.08,0,.47.21.47h2.15a.21.21,0,0,0,.21-.22V17.48a4.09,4.09,0,0,1,1.63-3.18,4.71,4.71,0,0,0-2.93-8.42Z"/></svg>
                                <a class="nav-link" href="../tips/tips.php">Tips</a>
                            </li>
                            <li class="nav-item">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>contact</title><g id="_Grupo_" data-name="&lt;Grupo&gt;"><path id="_Trazado_" data-name="&lt;Trazado&gt;" class="cls-1" d="M17.42,9.14a5.75,5.75,0,0,0-5.09-5.48l-.18,0a3,3,0,0,0-.43,0,.71.71,0,0,0-.77.65.74.74,0,0,0,.11.59,1.12,1.12,0,0,0,.8.34l.22,0c2.54.56,3.39,1.46,3.81,4a1.27,1.27,0,0,1,0,.22c0,.3.06.92.73.92h.18c.63-.1.61-.67.6-.94a1.31,1.31,0,0,1,0-.2Z"/><path id="_Trazado_2" data-name="&lt;Trazado&gt;" class="cls-1" d="M11.56,2.68l.2,0c4.18.64,6.1,2.62,6.63,6.82a1.93,1.93,0,0,1,0,.25c0,.33,0,1,.75,1h0a.72.72,0,0,0,.55-.21,1.15,1.15,0,0,0,.2-.88,1.28,1.28,0,0,1,0-.19,8.51,8.51,0,0,0-8-8.35h-.47a.75.75,0,0,0-.83.78C10.6,2.61,11.25,2.65,11.56,2.68Z"/><path id="_Trazado_3" data-name="&lt;Trazado&gt;" class="cls-1" d="M18.19,15l-.27-.21c-.46-.36-.94-.7-1.41-1l-.29-.2a2.93,2.93,0,0,0-1.65-.63A2.13,2.13,0,0,0,12.79,14a1,1,0,0,1-.81.49,1.59,1.59,0,0,1-.66-.16,7.86,7.86,0,0,1-4.11-4,1.31,1.31,0,0,1,.41-1.88,1.91,1.91,0,0,0,1-1.67c-.06-1-2.38-4.21-3.36-4.57A1.9,1.9,0,0,0,4,2.22,3.75,3.75,0,0,0,1.69,4.14,3.55,3.55,0,0,0,1.74,7a23.21,23.21,0,0,0,5.09,7.75,24.62,24.62,0,0,0,7.73,5.13,4.22,4.22,0,0,0,.76.23l.18,0h.1a4.39,4.39,0,0,0,3.64-2.77C19.69,16.11,18.86,15.47,18.19,15Z"/><path id="_Trazado_4" data-name="&lt;Trazado&gt;" class="cls-1" d="M12.18,6.09a.88.88,0,0,0-.92.54.73.73,0,0,0,0,.62,1,1,0,0,0,.7.37,1.64,1.64,0,0,1,1.53,1.65.79.79,0,0,0,.75.77h.09c.47-.06.7-.41.68-1a3,3,0,0,0-.92-2A2.76,2.76,0,0,0,12.18,6.09Z"/></g></svg>
                                <a class="nav-link" href="../soporte/canales.php">Contacto</a>
                            </li>
                            <li class="nav-item">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#fff;}</style></defs><title>config</title><path class="cls-1" d="M13.14,11.51a6.54,6.54,0,0,0,.62-1.46l-.95-.72c0-.17.06-.34.08-.51s0-.12,0-.18L14,8.21a6.75,6.75,0,0,0-.19-1.57l-1.18-.15a5.24,5.24,0,0,0-.27-.65l.75-.93a6.13,6.13,0,0,0-1-1.26l-1.09.46a6,6,0,0,0-.56-.44l.19-1.17a6.54,6.54,0,0,0-1.46-.62l-.72,1A4.54,4.54,0,0,0,8,2.74H7.85L7.42,1.62a6.25,6.25,0,0,0-1.57.19L5.7,3a5.18,5.18,0,0,0-.65.26L4.12,2.5a6.94,6.94,0,0,0-1.26,1l.46,1.1a5.89,5.89,0,0,0-.44.55L1.71,4.92a6.67,6.67,0,0,0-.62,1.45l1,.72A4.34,4.34,0,0,0,2,7.61c0,.06,0,.12,0,.18L.83,8.22A6.37,6.37,0,0,0,1,9.79l1.18.14a4.77,4.77,0,0,0,.26.66l-.75.92a7,7,0,0,0,1,1.27l1.1-.46a5.79,5.79,0,0,0,.55.43l-.18,1.18a6.67,6.67,0,0,0,1.45.62l.72-1,.52.08.18,0,.42,1.11A6.9,6.9,0,0,0,9,14.62l.14-1.18a4.8,4.8,0,0,0,.66-.27l.92.75A6.19,6.19,0,0,0,12,13l-.46-1.09a5.93,5.93,0,0,0,.43-.56ZM6.66,12a3.88,3.88,0,1,1,4.56-3A3.89,3.89,0,0,1,6.66,12Z"/><path class="cls-1" d="M3.89,7.51A3.6,3.6,0,1,0,8.13,4.68,3.6,3.6,0,0,0,3.89,7.51Zm6.24,1a2.72,2.72,0,1,1-2.41-3A2.74,2.74,0,0,1,10.13,8.51Z"/><path class="cls-1" d="M13.14,14.63a3.09,3.09,0,1,0,3.68-2.35A3.09,3.09,0,0,0,13.14,14.63Zm4.81,0a1.88,1.88,0,1,1-2.44-1.15A1.89,1.89,0,0,1,18,14.63Z"/><path class="cls-1" d="M20.92,16.75a4.81,4.81,0,0,0,.2-1.07l-.78-.36a5.31,5.31,0,0,0-.05-.68l.72-.47a4.44,4.44,0,0,0-.15-.52,4.4,4.4,0,0,0-.21-.5l-.86.08a3.72,3.72,0,0,0-.39-.56l.39-.78a5,5,0,0,0-.82-.7l-.7.5a5,5,0,0,0-.62-.3l0-.86a5.36,5.36,0,0,0-1.06-.2l-.36.78a3.91,3.91,0,0,0-.68.06L15,10.45a5.26,5.26,0,0,0-.53.15l-.5.2.08.86a5.58,5.58,0,0,0-.56.39l-.77-.39a5,5,0,0,0-.71.82l.5.71a4.27,4.27,0,0,0-.29.61l-.86,0a4.23,4.23,0,0,0-.2,1.06l.78.36A5.19,5.19,0,0,0,12,16l-.72.48a5.08,5.08,0,0,0,.15.52,4.4,4.4,0,0,0,.21.5l.86-.08a3.67,3.67,0,0,0,.38.56l-.38.77a5,5,0,0,0,.82.71l.7-.5a4.85,4.85,0,0,0,.61.29l.06.87a5.36,5.36,0,0,0,1.06.2l.36-.79a5.31,5.31,0,0,0,.68-.05l.47.72A4.44,4.44,0,0,0,17.8,20a3.75,3.75,0,0,0,.5-.21l-.08-.86a4.35,4.35,0,0,0,.57-.38l.77.39a5.42,5.42,0,0,0,.7-.82l-.5-.71a3.83,3.83,0,0,0,.3-.61Zm-5.46,1.69A3.22,3.22,0,1,1,19.3,16,3.22,3.22,0,0,1,15.46,18.44Z"/><path class="cls-1" d="M13,14.6a3.22,3.22,0,1,0,3.84-2.45A3.22,3.22,0,0,0,13,14.6ZM19.17,16a3.09,3.09,0,1,1-2.35-3.68A3.09,3.09,0,0,1,19.17,16Z"/></svg>
                                <a class="nav-link" href="../configuracion/configuracion.php">Configuración</a>
                            </li>
                            <li class="nav-item">
                                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>login</title><path class="cls-1" d="M10.67.38A5.43,5.43,0,1,0,16.09,5.8,5.43,5.43,0,0,0,10.67.38Z"/><path class="cls-1" d="M17.42,14.77a7.79,7.79,0,0,0-5.55-2.34H9.46a7.75,7.75,0,0,0-5.54,2.34,7.89,7.89,0,0,0-2.29,5.58.6.6,0,0,0,.6.6H19.11a.6.6,0,0,0,.6-.6A7.94,7.94,0,0,0,17.42,14.77Z"/></svg>
                                <a class="nav-link" href="../seguridad/login.php">Iniciar Sesión</a>
                            </li>
                            <li class="nav-item">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33"><defs><style>.cls-1{fill:#636363;}</style></defs><title>logout</title><path class="cls-1" d="M13.08,11.47a.8.8,0,0,0-.8.81V15.5a.81.81,0,0,1-.81.81H9.06V4.22A1.62,1.62,0,0,0,8,2.69l-.24-.08h3.75a.81.81,0,0,1,.81.81V5.83a.81.81,0,1,0,1.61,0V3.42A2.42,2.42,0,0,0,11.47,1H2.81L2.73,1,2.61,1A1.61,1.61,0,0,0,1,2.61v14.5a1.62,1.62,0,0,0,1.1,1.53l4.84,1.62a1.73,1.73,0,0,0,.5.07,1.62,1.62,0,0,0,1.62-1.61v-.8h2.41a2.43,2.43,0,0,0,2.42-2.42V12.28A.81.81,0,0,0,13.08,11.47Z"/><path class="cls-1" d="M20.1,8.49,16.88,5.26a.81.81,0,0,0-1.38.57V8.25H12.28a.81.81,0,1,0,0,1.61H15.5v2.42a.81.81,0,0,0,1.38.57L20.1,9.62A.8.8,0,0,0,20.1,8.49Z"/></svg>
                            <a class="nav-link" href="../seguridad/login.php">Cerrar Sesión</a>
                            </li>
                            
                            <div class="area_links_interes">
                                <li class="links_generales_navbar">
                                    <hr size="100%" color="white">
                                    <h4>Links de interes</h4>
                                </li>
                                <li class="links_generales_navbar"><a href="../soporte/ayuda.php">Ayuda</a></li>
                                <li class="links_generales_navbar"><a href="https://sivespa.gov.co">Sitio web SIVESPA</a></li>
                                <li class="links_generales_navbar"><a href="../sivespa/informacion.php">¿Qué es el SIVESPA?</a></li>
                                <li class="links_generales_navbar"><a href="../soporte/canales.php">Canales de soporte técnico</a></li>
                                <li class="links_generales_navbar"><a href="../soporte/documentacion.php">Documentación y tutoriales</a></li>
                                <li class="links_generales_navbar"><a href="https://escuelacontraladrogadiccion.gov.co/sobre-nosotros/">Escuela Contra la Drogadicción</a></li>
                                <li class="links_generales_navbar"><a href="../sivespa/descargas.php">Descargar aplicaciones</a></li>
                            </div>
                        </ul>

                    </div>
                </div>
            </nav>`;

// menu celular inferior
navbar_bottom_mobile.innerHTML = `
<div class="row justify-content-center">



<div class="col-sm-2 text-center">
<a href="../dashboards/dashboard_entidad.php">
<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33">
<defs>
<style>
.cls-1{fill:#636363;}</style>
</defs>
<title>
home</title>
<path class="cls-1" d="M20.31,10.67a.79.79,0,0,1-.8.8H17.9v7.24a1.6,1.6,0,0,1-1.6,1.6H5.05a1.61,1.61,0,0,1-1.61-1.6V11.47H1.83a.79.79,0,0,1-.8-.8.78.78,0,0,1,.24-.57l9.12-9a.4.4,0,0,1,.56,0l9.12,9A.82.82,0,0,1,20.31,10.67Z"/>
</svg>
</a>
</div>

<div class="col-sm-2 text-center">
<a href="../reportes/dashboard_reportes.php">
<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33">
<defs>
<style>
.cls-1{fill:#636363;}</style>
</defs>
<title>
report</title>
<path class="cls-1" d="M15.33,4.72h3.52L15.14,1.08V4.54A.18.18,0,0,0,15.33,4.72Z"/>
<path class="cls-1" d="M15.33,5.89A1.35,1.35,0,0,1,14,4.54V.74H4.31A2.17,2.17,0,0,0,2.14,2.91V18.42a2.17,2.17,0,0,0,2.17,2.17H17a2.17,2.17,0,0,0,2.17-2.17V5.89ZM14,15.78H6.51a.58.58,0,1,1,0-1.16H14a.58.58,0,0,1,0,1.16Zm-8.08-2.9a.58.58,0,0,1,.59-.58h6.68a.58.58,0,0,1,0,1.16H6.51A.58.58,0,0,1,5.92,12.88Zm8.78-1.75H6.51a.58.58,0,1,1,0-1.16H14.7a.58.58,0,1,1,0,1.16Z"/>
</svg>
</a>
</div>

<div class="col-sm-2 text-center">
<a href="../soporte/canales.php">
 <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.33 21.33">
<defs>
<style>
.cls-1{fill:#636363;}</style>
</defs>
<title>
contact</title>
<g id="_Grupo_" data-name="&lt;Grupo&gt;">
<path id="_Trazado_" data-name="&lt;Trazado&gt;" class="cls-1" d="M17.42,9.14a5.75,5.75,0,0,0-5.09-5.48l-.18,0a3,3,0,0,0-.43,0,.71.71,0,0,0-.77.65.74.74,0,0,0,.11.59,1.12,1.12,0,0,0,.8.34l.22,0c2.54.56,3.39,1.46,3.81,4a1.27,1.27,0,0,1,0,.22c0,.3.06.92.73.92h.18c.63-.1.61-.67.6-.94a1.31,1.31,0,0,1,0-.2Z"/>
<path id="_Trazado_2" data-name="&lt;Trazado&gt;" class="cls-1" d="M11.56,2.68l.2,0c4.18.64,6.1,2.62,6.63,6.82a1.93,1.93,0,0,1,0,.25c0,.33,0,1,.75,1h0a.72.72,0,0,0,.55-.21,1.15,1.15,0,0,0,.2-.88,1.28,1.28,0,0,1,0-.19,8.51,8.51,0,0,0-8-8.35h-.47a.75.75,0,0,0-.83.78C10.6,2.61,11.25,2.65,11.56,2.68Z"/>
<path id="_Trazado_3" data-name="&lt;Trazado&gt;" class="cls-1" d="M18.19,15l-.27-.21c-.46-.36-.94-.7-1.41-1l-.29-.2a2.93,2.93,0,0,0-1.65-.63A2.13,2.13,0,0,0,12.79,14a1,1,0,0,1-.81.49,1.59,1.59,0,0,1-.66-.16,7.86,7.86,0,0,1-4.11-4,1.31,1.31,0,0,1,.41-1.88,1.91,1.91,0,0,0,1-1.67c-.06-1-2.38-4.21-3.36-4.57A1.9,1.9,0,0,0,4,2.22,3.75,3.75,0,0,0,1.69,4.14,3.55,3.55,0,0,0,1.74,7a23.21,23.21,0,0,0,5.09,7.75,24.62,24.62,0,0,0,7.73,5.13,4.22,4.22,0,0,0,.76.23l.18,0h.1a4.39,4.39,0,0,0,3.64-2.77C19.69,16.11,18.86,15.47,18.19,15Z"/>
<path id="_Trazado_4" data-name="&lt;Trazado&gt;" class="cls-1" d="M12.18,6.09a.88.88,0,0,0-.92.54.73.73,0,0,0,0,.62,1,1,0,0,0,.7.37,1.64,1.64,0,0,1,1.53,1.65.79.79,0,0,0,.75.77h.09c.47-.06.7-.41.68-1a3,3,0,0,0-.92-2A2.76,2.76,0,0,0,12.18,6.09Z"/>
</g>
</svg>
</a>
</div>

<div class="col-sm-6">
<div class="dropdown">
                                
<button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
<div class="row">
<p class="nombre_entidad_activa">Nombre de la entidad</p>
</div>
<div class="row">
<p class="cambiar">Cambiar</p>
</div>
</button>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="">
<li><a class="dropdown-item" href="#">Entidad 1</a></li>
<li><a class="dropdown-item" href="#">Entidad 2</a></li>
<li><a class="dropdown-item" href="#">Entidad 3</a></li>
</ul>
</div>

</div>





</div>

</div>

</div>

`