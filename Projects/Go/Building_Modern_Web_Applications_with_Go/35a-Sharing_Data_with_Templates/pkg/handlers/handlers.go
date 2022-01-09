package handlers

import (
	"myapp/pkg/config"
	"myapp/pkg/render"
	"net/http"
)

// TemplateData holds data sent from handlers to templates
type TemplateData struct {
	StringMap map[string]string
	IntMap    map[string]int
	FloatMap  map[string]float32
	DataMap   map[string]interface{}
	CSRFToken string
	Flash     string
	Warning   string
	Error     string
}

// Repo the repository used by the handlers
var Repo *Repository

// Repository is the repository type
type Repository struct {
	App *config.AppConfig
}

// NewRepo creates a new repository
func NewRepo(a *config.AppConfig) *Repository {
	return &Repository{
		App: a,
	}
}

// NewHandlers sets the repository for the handlers
func NewHandlers(r *Repository) {
	Repo = r
}

// Home is the handler for the home page
func (m *Repository) Home(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "home.page.tmpl", &TemplateData{})
}

// About is the handler for the about page
func (m *Repository) About(w http.ResponseWriter, r *http.Request) {
	// perform some Logic
	stringMap := make(map[string]string)
	stringMap["test"] = "Hello, again."

	// send the data to the template
	render.RenderTemplate(w, "about.page.tmpl", &TemplateData{
		StringMap: stringMap,
	})

}
