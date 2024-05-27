// Array de citas motivacionales
const quotes = [
    "La motivación es lo que te pone en marcha, el hábito es lo que hace que sigas.",
    "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el valor para continuar.",
    "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer.",
    "La mejor manera de predecir el futuro es crearlo.",
    "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
    "No importa lo lento que vayas, siempre y cuando no te detengas.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Si puedes soñarlo, puedes hacerlo.",
    "La acción es la clave fundamental para todo éxito.",
    "La vida es 10% lo que nos pasa y 90% cómo reaccionamos a ello."
];

// Función para mostrar una cita motivacional aleatoria
function showQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Mostrar una cita motivacional al cargar la página
window.onload = function() {
    showQuote();
    populateDaySelect();
    updateDates();
};

// Función para actualizar las fechas en los cuadros de los días
function updateDates() {
    const days = document.querySelectorAll('.day');
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    const dayNames = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

    days.forEach((day, index) => {
        const dateElement = day.querySelector('.date');
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + index);
        
        if (date < new Date()) {
            const daySelectOption = document.querySelector(`#daySelect option[value="${index}"]`);
            if (daySelectOption) daySelectOption.disabled = true;
        }
    });
}

// Función para poblar el selector de días
function populateDaySelect() {
    const daySelect = document.getElementById('daySelect');
    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    dayNames.forEach((dayName, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = dayName;
        daySelect.appendChild(option);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const daySelect = document.getElementById('daySelect');
    const taskText = taskInput.value.trim();
    const selectedDay = parseInt(daySelect.value);
    
    if (taskText !== '' && !isNaN(selectedDay)) {
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const dayList = document.getElementById(days[selectedDay]).querySelector('ul');
        
        const listItem = document.createElement('li');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completado';
        completeButton.className = 'complete';
        completeButton.onclick = completeTask;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'delete';
        deleteButton.onclick = deleteTask;

        listItem.appendChild(taskSpan);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        dayList.appendChild(listItem);

        taskInput.value = '';
        daySelect.value = '';
    }
}

function completeTask(event) {
    const listItem = event.target.parentElement;
    listItem.classList.toggle('completed');
}

function deleteTask(event) {
    const listItem = event.target.parentElement;
    listItem.remove();
}
