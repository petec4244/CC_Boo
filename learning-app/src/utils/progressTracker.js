// Progress Tracker for Learning Journey
// Manages module completion and prerequisites

const MODULE_ORDER = {
  'binary': { order: 1, title: 'Binary Game', prerequisites: [] },
  'hex': { order: 2, title: 'Hex Colors', prerequisites: ['binary'] },
  'converter': { order: 3, title: 'Number Converter', prerequisites: ['binary', 'hex'] },
  'profile': { order: 4, title: 'My Name', prerequisites: [] },
  'ascii': { order: 5, title: 'ASCII Explorer', prerequisites: ['binary', 'converter'] },
  'memory': { order: 6, title: 'Memory Visualizer', prerequisites: ['binary'] },
  'storage': { order: 7, title: 'Data Storage', prerequisites: ['binary'] },
  'computer': { order: 8, title: 'How Computers Work', prerequisites: ['binary', 'memory'] },
  'logic': { order: 9, title: 'Logic Gates', prerequisites: ['binary'] },
  'internet': { order: 10, title: 'How Internet Works', prerequisites: [] },
  'code': { order: 11, title: 'Code Examples', prerequisites: ['binary', 'memory', 'ascii'] }
};

export const getCompletedModules = () => {
  const saved = localStorage.getItem('completedModules');
  return saved ? JSON.parse(saved) : [];
};

export const markModuleComplete = (moduleId) => {
  const completed = getCompletedModules();
  if (!completed.includes(moduleId)) {
    completed.push(moduleId);
    localStorage.setItem('completedModules', JSON.stringify(completed));
  }
};

export const isModuleCompleted = (moduleId) => {
  return getCompletedModules().includes(moduleId);
};

export const getPrerequisites = (moduleId) => {
  return MODULE_ORDER[moduleId]?.prerequisites || [];
};

export const hasCompletedPrerequisites = (moduleId) => {
  const prerequisites = getPrerequisites(moduleId);
  const completed = getCompletedModules();
  return prerequisites.every(prereq => completed.includes(prereq));
};

export const getMissingPrerequisites = (moduleId) => {
  const prerequisites = getPrerequisites(moduleId);
  const completed = getCompletedModules();
  return prerequisites.filter(prereq => !completed.includes(prereq))
    .map(prereq => MODULE_ORDER[prereq]?.title);
};

export const getProgressPercentage = () => {
  const total = Object.keys(MODULE_ORDER).length;
  const completed = getCompletedModules().length;
  return Math.round((completed / total) * 100);
};

export const getModuleInfo = (moduleId) => {
  return MODULE_ORDER[moduleId];
};

export const resetProgress = () => {
  localStorage.removeItem('completedModules');
};
